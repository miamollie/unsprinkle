


function generateSRCSet(src, outExt = ".jpg", inExt = ".jpg") {
    return `${src.replace(inExt, `${outExt}`)} 1x,
          ${src.replace(inExt, `@2x${outExt}`)} 2x,
          ${src.replace(inExt, `@3x${outExt}`)} 3x
           `
}
function OptimisedImage({ src, imgComponent }) {
    return (
        <picture>
            <source
                type="image/avif"
                srcSet={generateSRCSet(src, '.avif')}
            />
            <source
                type="image/jpeg"
                srcSet={generateSRCSet(src)}
            />
            {imgComponent}
        </picture>
    )
}

export default OptimisedImage