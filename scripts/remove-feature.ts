import { Project, SyntaxKind, Node } from 'ts-morph'

const removeFeatureName = process.argv[2] // example isArticleEnabled
const featureState = process.argv[3] // exmaple off/on

if (!removeFeatureName) {
    throw new Error('Provide feature name')
}

if (!featureState) {
    throw new Error('Provide feature state')
}

const isCorrectFeatureName = featureState !== 'on' && featureState !== 'off'

if (isCorrectFeatureName) {
    throw new Error('Provide correct feature state')
}

const project = new Project()

// project.addSourceFilesAtPaths('src/**/*.ts')
// project.addSourceFilesAtPaths('src/**/*.tsx')

project.addSourceFilesAtPaths('src/**/ArticleDetailsPage.tsx')

const files = project.getSourceFiles()

function isAbsolute(value: string) {
    const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages']
    if (layers.some((layer) => value.startsWith(layer))) {
        return true
    }
}

function isToggleFunction(node: Node) {
    let isToggleFeatures = false
    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === 'toggleFeatures'
        ) {
            isToggleFeatures = true
        }
    })

    return isToggleFeatures
}

files.forEach((file) => {
    file.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            const objectOptions = node.getFirstDescendantByKind(
                SyntaxKind.ObjectLiteralExpression,
            )
            const onFunctionProperty = objectOptions?.getProperty('on')
            const featureNameProperty = objectOptions?.getProperty('name')
            const offFunctionProperty = objectOptions?.getProperty('off')

            const onFunction = onFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            )
            const offFunction = offFunctionProperty?.getFirstDescendantByKind(
                SyntaxKind.ArrowFunction,
            )
            const featureName = featureNameProperty
                ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1)

            if (featureName !== removeFeatureName) return

            if (featureState === 'off') {
                node.replaceWithText(onFunction?.getBody().getText() ?? '')
            }

            if (featureState === 'off') {
                node.replaceWithText(offFunction?.getBody().getText() ?? '')
            }
        }
    })
})

project.save()
