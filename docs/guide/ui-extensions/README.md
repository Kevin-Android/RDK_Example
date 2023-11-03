# Ui Extensions 组件

Ui Extensions的核心功能主要通过模块、工具处理器和注释处理器来实现。

这些工具处理器和注释处理器通常在加载相关功能模块时会被初始化并注册到UIExtensionsManager。

下面这个集合能够帮助您迅速找到相关功能代码。

## 模块

Module

Ui Extensions 组件中的模块通过实现Module接口注册到UIExtensionsManager。

::: warning
标有 [🔖] 为注释功能模块
:::

| 序号 | 类名                    | getName                   | 描述       |
|----|-----------------------|---------------------------|----------|
| 1  | TextSelectModule      | TextSelect Module         | 文本选择模块   | 
| 2  | UndoModule            | Undo Redo Module          | 撤消模块     |
| 3  | LinkModule            | Link Module               | 链接模块     |
| 4  | DocInfoModule         | DocumentInfo Module       | 文档信息模块   |
| 5  | DocSaveAsModule       | Document Save as Module   | 文档另存为模块  |
| 6  | PrintModule           | Print Module              | 打印模块     |
| 7  | MoreMenuModule        | More Menu Module          | 更多菜单模块   |
| 8  | PageNavigationModule  | Page Navigation Module    | 页面导航模块   |
| 9  | SearchModule          | Search Module             | 搜索模块     |
| 10 | ReadingBookmarkModule | Bookmark Module           | 书签模块     |
| 11 | ThumbnailModule       | Thumbnail Module          | 缩略图模块    |
| 12 | MultiSelectModule     | Select Annotations Module | 选择多个注释模块 |
| 13 | ReflowModule          | Reflow Module             | 重排模块     |
| 14 | TTSModule             | TTS Module                | 文字转语音模块  |
| 15 | SquigglyModule        | Squiggly Module           | 波浪线🔖    |
| 16 | RedactModule          | Redact Module             | 编辑（密文）🔖 |
| 17 | StrikeoutModule       | Strikeout Module          | 删除线🔖    |
| 18 | UnderlineModule       | Underline Module          | 下划线🔖    |
| 19 | HighlightModule       | Highlight Module          | 高亮🔖     |
| 20 | NoteModule            | Note Module               | 注释🔖     |
| 21 | CircleModule          | Circle Module             | 圆🔖      |
| 22 | SquareModule          | Rectangle Module          | 矩形🔖     |
| 23 | TypewriterModule      | Typewriter Module         | 打字机🔖    |
| 24 | CalloutModule         | Callout Module            | 标注🔖     |
| 25 | StampModule           | Stamp Module              | 图章🔖     |
| 26 | CaretModule           | Caret Module              | 插入符号🔖   |
| 27 | InkModule             | Ink Module                | 墨迹🔖     |
| 28 | EraserModule          | Eraser Module             | 橡皮擦模块🔖  |
| 29 | LineModule            | Line Module               | 直线🔖     |
| 30 | FileAttachmentModule  | FileAttachment Module     | 文件附件🔖   |
| 31 | PolygonModule         | Polygon Module            | 多边形🔖    |
| 32 | PolyLineModule        | PolyLine Module           | 折线🔖     |
| 33 | TextBoxModule         | Textbox Module            | 文本框🔖    |
| 34 | PDFImageModule        | PDFImage Module           | 图像🔖     |
| 35 | MultimediaModule      | Multimedia Module         | 多媒体🔖    |
| 36 | SoundModule           | Sound Module              | 声音🔖     |

## 工具处理器

ToolHandler

Ui Extensions组件中工具处理器通过实现ToolHandler接口注册到UIExtensionsManager。

其中EraserToolHandler、InkToolHandler、LineToolHandler 继承自实现了ToolHandler接口的AbstractToolHandler抽象类。

| 序号 | 类名                        | getType                 | 描述           |
|----|---------------------------|-------------------------|--------------|
| 1  | MultimediaToolHandler     | Video Tool              | 多媒体工具处理器     |
| 2  | CaretToolHandler          | Replace Tool            | 插入符工具处理程序    |
| 3  | CircleToolHandler         | Circle Tool             | 圆形工具处理程序     |
| 4  | StrikeoutToolHandler      | Strikeout Tool          | 删除工具处理程序     |
| 5  | MultimediaToolHandler     | Audio Tool              | 多媒体工具处理器     |
| 6  | TypewriterToolHandler     | Typewriter Tool         | 打字机工具处理程序    |
| 8  | PolygonCloudToolHandler   | polygon cloud Tool      | 多边形云工具处理程序   |
| 9  | SquigglyToolHandler       | Squiggly Tool           | 波浪形工具处理程序    |
| 10 | FileAttachmentToolHandler | FileAttachment Tool     | 文件附件工具处理程序   |
| 11 | HighlightToolHandler      | Highlight Tool          | 高亮工具处理程序     |
| 12 | MultiSelectToolHandler    | Select Annotations Tool | 多选工具处理程序     |
| 13 | SquareToolHandler         | Square Tool             | 方形工具处理器      |
| 14 | TextBoxToolHandler        | Textbox Tool            | 文本框工具处理程序    |
| 15 | NoteToolHandler           | Note Tool               | 注释工具处理程序     |
| 16 | RedactToolHandler         | Redact Tool             | 编辑（密文）工具处理程序 |
| 19 | UnderlineToolHandler      | Underline Tool          | 下划线工具处理程序    |
| 20 | PolygonToolHandler        | polygon Tool            | 多边形工具处理程序    |
| 21 | CaretToolHandler          | InsetText Tool          | 插入符工具处理程序    |
| 22 | StampToolHandler          | Stamp Tool              | 图章工具处理程序     |
| 23 | LinkToolHandler           | Link Tool               | 链接工具处理程序     |
| 24 | TextSelectToolHandler     | TextSelect Tool         | 文本选择工具处理程序   |
| 25 | PolyLineToolHandler       | polyline Tool           | 折线工具处理程序     |
| 26 | CalloutToolHandler        | Callout Tool            | 标注工具处理程序     |
| 27 | BlankSelectToolHandler    | BlankSelect Tool        | 空白选择工具处理程序   |
| 28 | InkToolHandler            | Ink Tool                | 墨水工具处理程序     |
| 17 | EraserToolHandler         | Eraser Tool             | 橡皮擦工具处理程序    |
| 29 | PDFImageToolHandler       | PDFImage Tool           | PDF图像工具处理器   |
| 7  | LineToolHandler           | Distance Tool           | 距离工具         |
| 18 | LineToolHandler           | Line Tool               | 直线工具         |
| 30 | LineToolHandler           | Arrow Tool              | 箭头工具         |

## 注释处理程序

AnnotHandler

| 序号 | 类名                           | getType | 描述           |
|----|------------------------------|---------|--------------|
| 1  | DefaultAnnotHandler          | 0       | 默认注释处理程序     |
| 2  | NoteAnnotHandler             | 1       | 注释注释处理程序     |
| 3  | LinkAnnotHandler             | 2       | 链接注释处理程序     |
| 4  | TypewriterAnnotHandler       | 3       | 打字机注释处理程序    |
| 5  | LineAnnotHandler             | 4       | 线注释处理程序      |
| 6  | SquareAnnotHandler           | 5       | 方形注释处理程序     |
| 7  | CircleAnnotHandler           | 6       | 圆形注释处理程序     |
| 8  | PolygonAnnotHandler          | 7       | 多边形注释处理程序    |
| 9  | PolyLineAnnotHandler         | 8       | 折线注释处理程序     |
| 10 | HighlightAnnotHandler        | 9       | 高亮注释处理程序     |
| 11 | UnderlineAnnotHandler        | 10      | 下划线注释处理程序    |
| 12 | SquigglyAnnotHandler         | 11      | 波浪形注释处理程序    |
| 13 | StrikeoutAnnotHandler        | 12      | 删除注释处理程序     |
| 14 | StampAnnotHandler            | 13      | 标记注释处理程序     |
| 15 | CaretAnnotHandler            | 14      | 插入符号注释处理程序   |
| 16 | InkAnnotHandler              | 15      | 墨水注释处理程序     |
| 17 | FileAttachmentAnnotHandler   | 17      | 文件附件注释处理程序   |
| 18 | SoundAnnotHandler            | 18      | 声音注释处理程序     |
| 19 | FormFillerAnnotHandler       | 20      | 表单填充注释处理程序   |
| 20 | RedactAnnotHandler           | 27      | 编辑（密文）注释处理程序 |
| 21 | TextBoxAnnotHandler          | 100     | 文本框注释处理程序    |
| 22 | CalloutAnnotHandler          | 101     | 标注注释处理程序     |
| 23 | DigitalSignatureAnnotHandler | 102     | 数字签名注释处理程序   |
| 24 | PDFImageAnnotHandler         | 201     | PDF 图像注释处理程序 |
| 25 | MultimediaAnnotHandler       | 202     | 多媒体注释处理程序    |
| 26 | MultiSelectAnnotHandler      | 301     | 多选注释处理程序     |
