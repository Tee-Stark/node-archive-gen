const archiver = require('archiver')
const fs = require('fs')

// create ZIP from file
const createZipFromFile = (file) => {
    const filePath = __dirname + '/' + file
    const output = fs.createWriteStream(filePath + '.zip')
    const archive = archiver('zip', {
        zlib: { level: 9 } // set compression level to the highest
    })

    archive.pipe(output);
    archive.file(filePath, { name: file })
    archive.finalize()
}

// create ZIP from folder
const createZipFromFolder = (folder) => {
    const folderPath = __dirname + '/' + folder
    const output = fs.createWriteStream(folderPath + '.zip')

    const archive = archiver('zip', {
        zlib: { level: 9 } // set compression level to the highest
    })

    archive.pipe(output)
    archive.directory(folderPath, false)
    archive.finalize()
}

(function () {
    const file = 'test.pdf'
    const folder = 'test_folder'
    createZipFromFile(file)
    createZipFromFolder(folder)
    console.log('ZIP archive created successfully')
}) ()
