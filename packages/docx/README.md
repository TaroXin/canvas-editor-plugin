<h1 align="center">canvas-editor-plugin-docx</h1>

<p align="center">docx plugin for canvas-editor</p>

## usage

```bash
npm i @baohu/canvas-editor-plugin-docx --save
```

```javascript
import Editor from '@baohu/canvas-editor'
import docxPlugin from '@baohu/canvas-editor-plugin-docx'

const instance = new Editor()
instance.use(docxPlugin)

command.executeImportDocx({
  arrayBuffer: buffer
})

instance.command.executeExportDocx({
  fileName: string
})
```

Checkboxes in the document (content controls, legacy form fields, `☐☑☒`
characters and Wingdings box symbols) are imported as checkbox elements. Those
not explicitly drawn as a tick (☑) or a cross (☒) use `checkboxMarkType`,
which defaults to `CheckboxMarkType.CROSS`:

```javascript
import { CheckboxMarkType } from '@baohu/canvas-editor'

await command.executeImportDocx({
  arrayBuffer: buffer,
  checkboxMarkType: CheckboxMarkType.CHECK
})
```

The export always returns a Blob. By default it also downloads the file. Set
`download: false` to let the application upload, preview or download it itself:

```javascript
const blob = await instance.command.executeExportDocx({
  fileName: 'manuscript',
  download: false
})
```
