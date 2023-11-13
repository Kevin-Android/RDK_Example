# PDF Core API



备注 ：在上述代码中，我们使用一个配置文件来实例化UIExtensionsManager。如果您不想使用配置

文件，可参考3.6小节 "使用UI Extensions组件构建一个功能齐全的PDF阅读器"。

4.1.4 通过配置文件自定义UI的示例

在本节中，我们将向您展示如何在您的项目中自定义功能模块、权限管理和UI设置 (例如，UI元素属

性)。您会发现这些自定义都非常容易的实现，您只需要修改配置文件。下面列出了一些操作示例。




备注 ：为了方便起见，我们将在 "samples"文件夹下的 " complete_pdf_viewer " demo中进行演

示。

在Android Studio中打开 " complete_pdf_viewer " demo。在

"complete_pdf_viewer\app\src\main\res\raw" 文件夹下找到配置文件

"uiextensions_config.json"。

示例 1 ：禁用"readingbookmark" 和 "navigation" 功能模块。

在JSON文件中，将 "readingbookmark" 和 "navigation" 的值设置为 "false"，如下所示：

"readingbookmark" : false ,
"navigation" : false ,

然后，重新编译和运行该demo。如下列出了前后对比图：

修改前: 修改后:

"readingbookmark" 和 "navigation" 功能模块被移除了。

示例 2 ：禁用超链接。

在JSON文件中，将 "disableLink" 的值设置为 "true"，如下所示：

"permissions" : {
"runJavaScript" : true ,
"copyText" : true ,




"disableLink" : true
},

然后，重新编译和运行该demo，您会发现当您单击超链接时没有任何响应。

示例 3 ：将高亮颜色从黄色设置为红色。

在JSON文件中，将 "highlight" 的color属性设置为 "#ff0000" ，如下所示：

"highlight" : {
"color" : "#ff0000" , "opacity" : 1.0 },

然后，重新编译和运行该demo。如下列出了前后对比图：

修改前: 修改后:

高亮颜色变为红色了。

### 4.2 通过APIs自定义UI元素

在4.0版本中，Foxit PDF SDK for Android 支持自定义显示或者隐藏整个top toolbar 或者bottom

toolbar，从5.0版本开始，提供了APIs去自定义显示或者隐藏一个特定的面板，top/bottom

toolbar、View setting bar和More Menu view上面的菜单项，方便开发人员在内置UI框架下对UI

元素进行修改。

从8.0版本开始，UI Extensions Component的内置UI进行了全新的改版。




备注 ：为了方便起见，我们将在 "samples"文件夹下的 " complete_pdf_viewer " demo中向您展示

如何通过APIs对UI元素进行自定义。我们假设您没有修改过demo中的

"uiextensions_config.json" 文件，也就是说UI Extensions组件中的所有内置UI都是启用的。

4.2.1 自定义 top/bottom toolbar

对于top/bottom toolbar，您可以执行以下操作：

1. 显示或者隐藏top/bottom toolbar。

2. 添加自定义菜单项。

3. 移除某个特定的菜单项。

4. 移除toolbar上所有的菜单项。

5. 显示或者隐藏某个特定的菜单项。

6. 添加自定义toolbar。

7. 移除某个特定的toolbar。

8. 设置toolbar的背景色。

9. 获取toolbar上特定位置的菜单项个数。

10. 移除在top toolbar中心位置的特定tab。

Table 4 - 1 列出了用于自定义top/bottom toolbar相关的APIs。

```

Table 4 - 1

```
```

void enableTopToolbar (boolean isEnabled) 启用或者禁用top toolbar。
void enableBottomToolbar (boolean isEnabled) 启用或者禁用bottom toolbar。
boolean addItem (BarName barName,
BaseBar.TB_Position gravity, BaseItem item, int
index);

```
```

在toolbar上添加自定义菜单项。

```
```

boolean addItem (BarName barName,
BaseBar.TB_Position gravity, int textId, int resId, int
index, IItemClickListener clickListener);

```
```

在toolbar上添加默认菜单项。

```
```

boolean addItem (BarName barName,
BaseBar.TB_Position gravity, CharSequence text, int
index, IItemClickListener clickListener);

```
```

在toolbar上添加默认的文本菜单项。

```
```

boolean addItem (BarName barName,
BaseBar.TB_Position gravity, Drawable drawable, int
index, IItemClickListener clickListener);

```
```

在toolbar上添加默认的图片菜单项。

```
```

IBaseItem getItemByIndex (BarName barName,
BaseBar.TB_Position gravity, int index);

```
#通过索引获取菜单项。




```

void setItemVisibility (BarName barName,
BaseBar.TB_Position gravity, int index, int visibility); 设置菜单项视图的的状态：可见或者不可见。^
int getItemVisibility (BarName barName,
BaseBar.TB_Position gravity, int index);
返回菜单项视图的状态：可见或者不可见。

```
```

int getItemsCount (BarName barName,
BaseBar.TB_Position gravity);

```
```

通过IBarsHandler.BarName 和 BaseBar.TB_Position
获取菜单项个数。
boolean removeItem (BarName barName,
BaseBar.TB_Position gravity, int index); 移除toolbar上指定索引位置的菜单项。^
boolean removeItem (BarName barName,
BaseBar.TB_Position gravity, BaseItem item); 移除toolbar上指定索引位置的菜单项。^
void removeAllItems (BarName barName); 移除toolbar上所有的菜单项。
boolean addCustomToolBar (BarName barName,
View view); 通过BarName添加自定义toolbar。^
boolean removeToolBar (BarName barName); 通过BarName移除toolbar。
void setBackgroundColor (BarName barName, int
color); 设置toolbar的背景色。^
void setBackgroundResource (BarName barName,
int resid); 将从指定的资源文件中加载背景样式。^
BaseItem getItem (BarName barName,
BaseBar.TB_Position gravity, int tag); 通过tag获取菜单项，如果tag不存在，则返回null。^
void removeTab (int type); 移除top toolbar中心位置的特定tab以及其子工具栏。

```
为了更好的定位需要添加新菜单或者移除已有菜单的位置，定义了两个比较重要的枚举类型，如下所

示：

enum BarName {
TOP_BAR,
BOTTOM_BAR;
}

enum TB_Position {
Position_LT,
Position_CENTER,
Position_RB;
}

备注：

1. 对于平板设备，其UI界面上移除了bottom toolbar。

2. 在top toolbar上添加菜单项，需要将 BaseBar.TB_Position 设置为 Position_LT 或者

Position_RB 。在bottom toolbar上添加菜单项，需要将 BaseBar.TB_Position 设置为

Position_CENTER 。否则，菜单项之间可能会重叠。




3. 对于手机设备，bottom toolbar是一个部分，而top toolbar分成两个部分，因此toolbar一

共有三个部分，每个部分都有单独的index。对于平板设备，其没有bottom toolbar。(见

Figure 4 - 2 )

4. 为了获得最佳的UI显示效果，建议top toolbar的文本字符数不超过 15 ，bottom toolbar不

超过8. 如果超出建议的字符数，可能会导致view排版混乱。

```

Figure 4 - 2

```
在下面的示例中，我们将在"samples"文件夹下的 " complete_pdf_viewer " demo中向您展示如何通

过APIs对top/bottom toolbar进行自定义。

在Android Studio中打开 " complete_pdf_viewer " demo。将示例代码加入到

"PDFReaderFragment.java"文件中 (加在" mUiExtensionsManager = new

UIExtensionsManager(getActivity().getApplicationContext(), pdfViewerCtrl , config);"之后)。

备注 ：手机和平板上面的内置UI有一些不同。下面列举的示例有的适用于手机和平板，也有一些示例

仅仅适用于手机端。在本手册中，如果在手机和平板上的自定义结果类似，则只列出在手机上的效果

图。




示例 1 ：隐藏整个top toolbar. (适用于手机和平板)

mUiExtensionsManager .enableTopToolbar( false );

修改前:

修改后:

示例 2 ：隐藏整个bottom toolbar. (仅适用于手机)

mUiExtensionsManager .enableBottomToolbar( false );

修改前:

修改后:

示例 3 ：在top toolbar左侧的第二个位置加入一个菜单项。(适用于手机和平板)

BaseItemImpl mTopItem1 = new BaseItemImpl(getContext(), R.drawable. rd_delete_menu );
mTopItem1.setOnClickListener( new View.OnClickListener() {
@Override
public void onClick(View v) {
UIToast.getInstance(getActivity()).show( "Add an item in the left top toolbar at the second position." );
}
});
mUiExtensionsManager .getBarManager().addItem(IBarsHandler.BarName. TOP_BAR ,
BaseBar.TB_Position. Position_LT , mTopItem1, 1 );

重新运行demo后：




示例 4 ：在top toolbar右侧的第一个位置加入一个菜单项。(适用于手机和平板)

BaseItemImpl mTopItem2 = new BaseItemImpl(getContext(), R.drawable. rd_delete_menu );
mTopItem2.setOnClickListener( new View.OnClickListener() {
@Override
public void onClick(View v) {
UIToast.getInstance(getActivity()).show( "Add an item in the right top toolbar at the first position" );
}
});
mUiExtensionsManager .getBarManager().addItem(IBarsHandler.BarName. TOP_BAR ,

BaseBar.TB_Position. Position_RB , mTopItem2, 0 );

重新运行demo后：

示例 5 ：在bottom toolbar的最左边加入一个菜单项。(仅适用于手机)

mUiExtensionsManager .getBarManager().addItem(IBarsHandler.BarName. BOTTOM_BAR ,
BaseBar.TB_Position. Position_CENTER ,
"" , R.drawable. ic_bar_item_more , 0 , new IBarsHandler.IItemClickListener() {
@Override
public void onClick(View v) {
UIToast.getInstance(getActivity()).show( "Add an item to the bottom toolbar at the first position." );
}
});

重新运行demo后：

示例 6 ：在bottom toolbar的第二个位置加入一个自定义样式的菜单项。(仅适用于手机)

BaseItemImpl mSettingBtn = new BaseItemImpl( this .getContext(), R.drawable. rd_annot_create_ok_selector );
mSettingBtn.setOnClickListener( new View.OnClickListener() {
@Override
public void onClick(View v) {
UIToast.getInstance(getActivity()).show( "Add an item with custom style to the bottom toolbar at the
second position." );
}
});
mUiExtensionsManager .getBarManager().addItem(IBarsHandler.BarName. BOTTOM_BAR ,
BaseBar.TB_Position. Position_CENTER , mSettingBtn, 1 );




重新运行demo后：

示例 7 ：通过索引值移除一个菜单项 (移除bottom toolbar上的第一个菜单项)。 (仅适用于手机)

mUiExtensionsManager .getBarManager().removeItem(IBarsHandler.BarName. BOTTOM_BAR ,
BaseBar.TB_Position. Position_CENTER , 0 );

重新运行demo后：

示例 8 ：通过BaseItem对象移除一个菜单项 (从top toolbar上移除您刚添加的自定义菜单项)。(适

用于手机和平板)

mUiExtensionsManager .getBarManager().removeItem(IBarsHandler.BarName. TOP_BAR ,
BaseBar.TB_Position. Position_LT , mTopItem1);

修改前: (见 示例 3 )

修改后:

示例 9 ：移除bottom toolbar上所有的菜单项。(仅适用于手机)

mUiExtensionsManager .getBarManager().removeAllItems(IBarsHandler.BarName. BOTTOM_BAR );

修改前:

修改后:




示例 10 ：在top toolbar的左侧添加 2 个菜单项去控制"more menu"菜单项的显示和隐藏。(适用

于手机和平板)

// Get and save the item that you want to show or hide.
BaseBarManager baseBarManager = (BaseBarManager) mUiExtensionsManager .getBarManager();
final BaseItemImpl moreItem = (BaseItemImpl) baseBarManager.getItem(IBarsHandler.BarName. TOP_BAR ,
BaseBar.TB_Position. Position_RB , ToolbarItemConfig.ITEM_TOPBAR_MORE);

// Add a buttom in the left top toolbar to hide the "moreItem" item.
BaseItemImpl mTopItem = new BaseItemImpl(getContext(), R.drawable. rd_delete_menu );
mTopItem.setOnClickListener( new View.OnClickListener() {
@Override
public void onClick(View v) {
// Hide the "moreItem" item.
mUiExtensionsManager .getBarManager().removeItem(IBarsHandler.BarName. TOP_BAR ,
BaseBar.TB_Position. Position_RB , moreItem);
}
});
mUiExtensionsManager .getBarManager().addItem(IBarsHandler.BarName. TOP_BAR ,
BaseBar.TB_Position. Position_LT , mTopItem, 1 );

// Add a buttom in the left top toolbar to show the "moreItem" item.
BaseItemImpl mTopItem2 = new BaseItemImpl(getContext(), R.drawable. common_add_icon );
mTopItem2.setOnClickListener( new View.OnClickListener() {
@Override
public void onClick(View v) {
// Show the "moreItem" item.
if (AppDisplay.isPad())
mUiExtensionsManager .getBarManager().addItem(IBarsHandler.BarName. TOP_BAR ,
BaseBar.TB_Position. Position_RB , moreItem, 3 );
else
mUiExtensionsManager .getBarManager().addItem(IBarsHandler.BarName. TOP_BAR ,
BaseBar.TB_Position. Position_RB , moreItem, 1 );
}
});
mUiExtensionsManager .getBarManager().addItem(IBarsHandler.BarName. TOP_BAR ,
BaseBar.TB_Position. Position_LT , mTopItem2, 2 );

重新运行demo后，top toolbar如下图所示：

点击 ，则 "more menu" 会被隐藏，如下图所示：




点击 ，则 "more menu" 会显示，如下图所示：

示例11: 移除整个bottom toolbar。(仅适用于手机)

mUiExtensionsManager .getBarManager().removeToolBar(IBarsHandler.BarName. BOTTOM_BAR );

示例12: 添加一个自定义toolbar。(添加一个自定义布局文件 "test_top_layout") (适用于手机和平

板)

View topView = View.inflate(getContext(), R.layout. test_top_layout , null );
mUiExtensionsManager .getBarManager().addCustomToolBar(IBarsHandler.BarName. TOP_BAR , topView);

示例13: 移除top toolbar中间位置列表中的 "From" tab。(适用于手机和平板)

mUiExtensionsManager .getMainFrame().removeTab(ToolbarItemConfig.ITEM_FORM_TAB);

修改前: 修改后:

示例14: 移除手机端在bottom toolbar上的 "view" 菜单，或者移除平板端在top toolbar中间位

置列表中的 "view" tab。(适用于手机和平板)

if (AppDisplay.isPad())
mUiExtensionsManager .getMainFrame().removeTab(ToolbarItemConfig.ITEM_VIEW_TAB);




else
mUiExtensionsManager .getBarManager().removeItem(IBarsHandler.BarName. BOTTOM_BAR ,
BaseBar.TB_Position. Position_CENTER , 1 );

对于手机设备：

修改前: 修改后:

对于平板设备：

修改前: 修改后:







4.2.2 自定义添加/移除一个特定的面板........................................................................................................

通过Table 4 - 2 中列出的APIs，您可以添加自定义的面板或者移除一个特定的面板。Complete PDF

Viewer demo包含了 "Bookmarks"、"Outline"、"Annotations"、"Attachments" 和 "Digital

Signatures" 面板，手机端点击底部工具栏上的 图标查看，平板端点击左上工具栏上的 图标来

查看，如Figure 4 - 3 所示。

```

Table 4 - 2

```
Public void addPanel (PanelSpec panelSpec)  添加一个子面板，如果使用
PanelSpec#getPanelType() 获取到的面板已经存
在，则不会再被添加。
public void addPanel (int index, PanelSpec
panelSpec)

#在指定的位置添加一个子面板，如果使用

```

PanelSpec#getPanelType() 获取到的面板已经存
在，则不会再被添加。

```
public void removePanel (int panelType)  移除指定位置的子面板。
public void removePanel (PanelSpec
panelSpec)

#移除子面板。

```

Figure 4 - 3

```
在本节中，我们提供 2 个示例：




• Example1 用来展示如何通过APIs来移除一个特定的面板。我们在 "samples" 文件夹下的

" complete_pdf_viewer " demo中进行示例展示。以 "Outline" 面板为例，对于其他的面

板，您只需要修改 PanelType 的值。Panels和 PanelType 之间的对应关系如下表所示：

Panel PanelSpec integer

Bookmarks PanelSpec.BOOKMARKS (^0)
Outline PanelSpec.OUTLINE 1
Comments PanelSpec.ANNOTATIONS (^2)
Attachments PanelSpec.ATTACHMENTS (^3)
Digital Signatures PanelSpec.SIGNATURES (^4)

• Example2 用来展示如何通过APIs来添加一个自定义的面板。首先需要创建一个Java类 (比

如，命名为 CustomPanel )，该类实现 " PanelSpec.java " 接口。当实现了相关方法和事件

后，即可添加面板。

在Android Studio中打开 " complete_pdf_viewer " demo。将示例代码加入到

"PDFReaderFragment.java"文件中 (加在 " mUiExtensionsManager = new

UIExtensionsManager(getActivity().getApplicationContext(), pdfViewerCtrl , config);"之后)。

示例 1 ：在top toolbar左侧的第二个位置添加一个菜单项用来移除 "Outline" 面板。(适用于手机和

平板)

BaseItemImpl removePanel = new BaseItemImpl(getActivity(), R.drawable. rd_delete_menu );
removePanel.setOnClickListener( new View.OnClickListener() {
@Override
public void onClick(View v) {
mUiExtensionsManager .getPanelManager().removePanel(PanelSpec. OUTLINE );
}
});
mUiExtensionsManager .getBarManager().addItem(IBarsHandler.BarName. TOP_BAR ,
BaseBar.TB_Position. Position_LT , removePanel, 1 );

运行demo后，点击顶部工具栏上的 ，然后手机端点击底部工具栏上的 ，平板端点击左上工

具栏上的 ，则您可以看到 "Outline" 面板被移除了 (见Figure 4 - 4 )。




```

Figure 4 - 4

```
示例 2 ：在top toolbar左侧的第二个位置添加一个菜单项用来添加自定义面板。(适用于手机和平

板)

BaseItemImpl customPanel = new BaseItemImpl(getActivity(), R.drawable. common_add_icon );
customPanel.setOnClickListener( new View.OnClickListener() {
@Override
public void onClick(View v) {
mUiExtensionsManager .getPanelManager().addPanel( new CustomPanel(getContext()));
}
});
mUiExtensionsManager .getBarManager().addItem(IBarsHandler.BarName. TOP_BAR ,
BaseBar.TB_Position. Position_LT , customPanel, 1 );

假设您已经创建了一个自定义的面板。创建一个名为 CustomPanel 的Java类，该类实现

" PanelSpec.java " 接口：

package com.foxit.home;

import android.content.Context;
import android.content.res.ColorStateList;
import android.view.View;
import android.widget.TextView;




import com.foxit.uiextensions.controls.panel.PanelSpec;
import com.foxit.uiextensions.controls.toolbar.BaseBar;
import com.foxit.uiextensions.controls.toolbar.IBaseItem;
import com.foxit.uiextensions.controls.toolbar.impl.BaseItemImpl;
import com.foxit.uiextensions.controls.toolbar.impl.TopBarImpl;

public class CustomPanel implements PanelSpec {

private Context mContext ;

public CustomPanel(Context context){
mContext = context;
}

@Override
public int getIcon() {
return R.drawable. toolbar_thumbnail_icon ;
}

@Override
public ColorStateList getIconTint() {
return null ;
}

@Override
public int getPanelType() {
return 100 ;
}

@Override
public View getTopToolbar() {
TopBarImpl topBar = new TopBarImpl( mContext );
IBaseItem baseItem = new BaseItemImpl( mContext );
baseItem.setText( "Custom Panel" );
topBar.addView(baseItem, BaseBar.TB_Position. Position_CENTER );
return topBar.getContentView();
}

@Override
public View getContentView() {
TextView textView = new TextView( mContext );
textView.setText( "This is empty" );
return textView;
}

@Override
public void onActivated() {

}

@Override




public void onDeactivated() {

}
}

运行demo后，点击顶部工具栏上的 ，然后手机端点击底部工具栏上的 ，平板端点击左上工

具栏上的 ，则您可以看到如Figure 4 - 5 所示的自定义面板。

```

Figure 4 - 5

```
4.2.3 自定义隐藏View setting bar上的UI元素

隐藏View setting bar上的UI元素 (见Figure 4 - 6 ，手机端点击底部工具栏上的 查看，平板端点

击顶部工具栏中靠近 Home 的 图标找到 view )，您只需要使用下面的API：

在IViewSettingsWindow 类中,

public void setVisible (int type, boolean visible);




```

Figure 4 - 6

```
参数 " type " 的值可以参考如下的表格，其对应View setting bar上的菜单项。

```

type integer
IViewSettingsWindow.TYPE_SINGLE_PAGE 1
IViewSettingsWindow.TYPE_FACING_PAGE 2
IViewSettingsWindow.TYPE_COVER_PAGE 4
IViewSettingsWindow.TYPE_DAY 8
IViewSettingsWindow.TYPE_PAGE_COLOR 16
IViewSettingsWindow.TYPE_NIGHT 32
IViewSettingsWindow.TYPE_CONTINUOUS_PAGE 64
IViewSettingsWindow.TYPE_FIT_PAGE 128
IViewSettingsWindow.TYPE_FIT_WIDTH 256
IViewSettingsWindow.TYPE_REFLOW 288
IViewSettingsWindow.TYPE_CROP 320
IViewSettingsWindow.TYPE_TTS 384
IViewSettingsWindow.TYPE_AUTO_FLIP 512
IViewSettingsWindow.TYPE_ROTATE_VIEW 544
IViewSettingsWindow.TYPE_PAN_ZOOM 576

```
在本节中，我们在 "samples" 文件夹下的 " complete_pdf_viewer " demo中以 " Fit Width " 菜单为

例展示如何通过APIs来隐藏View setting bar上的UI元素。对于其他的UI元素，您只需要修改参

数 " type "。




在Android Studio中打开 " complete_pdf_viewer " demo。将示例代码加入到

"PDFReaderFragment.java"文件中 (加在 " mUiExtensionsManager .onCreate(getActivity(),

pdfViewerCtrl , savedInstanceState);"之后)。

示例 1 ：隐藏View setting bar上面的Fit Width菜单。(适用于手机和平板)

mUiExtensionsManager .getSettingBar().setVisibility(IMultiLineBar. TYPE_REFLOW , View. INVISIBLE );

手机端：

修改前: 修改后:




平板端：

修改前: 修改后:

4.2.4 自定义添加/隐藏More Menu菜单上的UI元素

显示或者隐藏More Menu 菜单, 请参考4.2.1小节 "自定义 top/bottom toolbar" (见示例 10 )

您可以使用Table 4 - 3 中列出的APIs来添加一个自定义的group或者子菜单项，以及隐藏一个特定

的group或者子菜单项。Table 4 - 3 只列出了本节示例所使用的APIs，有关其他的APIs，请参阅API

Reference。

点击右上角工具栏上的 ，您可以看到More Menu view上的UI元素，如Figure 4 - 7 所示。

```

Table 4 - 3

```
IMenuGroup. addItem (IMenuItem item)  添加IMenuItem类型的菜单项。
IMenuGroup. addItem (CharSequence title)  添加带有指定标题的菜单项。
IMenuGroup. addItem (Drawable icon,
CharSequence title)

#添加带有指定图标和标题的菜单项。

IMenuGroup. setVisible (boolean visible);  设置menu group的可见状态。
IMenuItem. setVisible (boolean visible)  设置菜单项的可见状态。




```

Figure 4 - 7

```
More Menu view被划分为如下的 2 个组：

```

Group integer
GROUP_ACTION_MENU_PRIMARY 1000
GROUP_ACTION_MENU_SECONDARY 1001

```
每个组有如下的菜单项：

```

Group Item integer

```
```

GROUP_ACTION_MENU_PRIMARY

```
#ITEM_PRIMARY_PROTECT 1

#ITEM_PRIMARY_COMMENT_FIELDS 2

#GROUP_ACTION_MENU_SECONDARY

#ITEM_SECONDARY_SAVE_AS 1

#ITEM_SECONDARY_REDUCE_FILE_SIZE 2

#ITEM_SECONDARY_PRINT 3

#ITEM_SECONDARY_FLATTEN 4

#ITEM_SECONDARY_SCREEN 5

其中，ITEM_PRIMARY_PROTECT 和ITEM_PRIMARY_COMMENT_FIELDS菜单有如下的子菜单项：

```

Item sub-Item integer

```
```

ITEM_PRIMARY_PROTECT

```
#ITEM_PROTECT_REDACTION 1

#ITEM_PROTECT_REMOVE_PASSWORD 2




#ITEM_PROTECT_FILE_ENCRYPTION 3

#ITEM_PROTECT_TRUSTED_CERTIFICATES 4

#ITEM_PRIMARY_COMMENT_FIELDS

#ITEM_COMMENTS_FIELDS_IMPORT_COMMENTS 1

#ITEM_COMMENTS_FIELDS_EXPORT_COMMENTS 2

#ITEM_COMMENTS_FIELDS_SUMMARIZE_COMMENTS 3

#ITEM_COMMENTS_FIELDS_RESET_FORM_FIELDS 4

#ITEM_COMMENTS_FIELDS_IMPORT_FORM_DATA 5

#ITEM_COMMENTS_FIELDS_EXPORT_FORM_DATA 6

在本节中，我们提供 3 个示例：

• Example1 和Example2 用来展示如何通过APIs来隐藏More Menu view中特定的组或者

菜单。我们在 "samples" 文件夹下的 " complete_pdf_viewer " demo中进行示例展示。以

"GROUP_ACTION_MENU_PRIMARY" 组和 "ITEM_SECONDARY_PRINT" 菜单为例，对于其他

的组和菜单，请参考该示例。

• Example3 用来展示如何通过APIs来添加带有菜单项的自定义组。

在Android Studio中打开 " complete_pdf_viewer " demo。将示例代码加入到

"PDFReaderFragment.java"文件中 (加在" mUiExtensionsManager = new

UIExtensionsManager(getActivity().getApplicationContext(), pdfViewerCtrl , config);"之后)。

备注 ：手机和平板上面的内置UI有一些不同。下面列举的示例适用于手机和平板，在本手册中，如果

在手机和平板上的自定义结果类似，则只列出在手机上的效果图。

示例 1 ：隐藏More Menu view上面的 "GROUP_ACTION_MENU_PRIMARY" 菜单组。(适用于手

机和平板)

IMenuView menuView = mUiExtensionsManager .getMenuView();
IMenuGroup menuGroup = menuView.getGroup(MoreMenuConstants. GROUP_ACTION_MENU_PRIMARY );
menuGroup.setVisible( false );

修改前: 修改后:







示例 2 ：隐藏More Menu view上面的 "ITEM_SECONDARY_PRINT" 菜单项。(适用于手机和平板)

IMenuView menuView = mUiExtensionsManager .getMenuView();
IMenuGroup menuGroup = menuView.getGroup(MoreMenuConstants. GROUP_ACTION_MENU_SECONDARY );
IMenuItem menuItem = menuGroup.getItem(MoreMenuConstants. ITEM_SECONDARY_PRINT );
menuItem.setVisible( false );

修改前: 修改后:




示例 3 ：在More Menu view上添加一个带有 2 个菜单项的菜单组。(适用于手机和平板)

IMenuView menuView = mUiExtensionsManager .getMenuView();
IMenuGroup customGroup = menuView.addGroup( "Custom Group" );
IMenuItem item1 =
customGroup.addItem(AppResource.getDrawable(getActivity(),R.drawable. rd_comment_menu ), "comment" );
item1.setOnMenuItemClickListener( new IMenuItem.OnMenuItemClickListener() {
@Override
public void onClick(IMenuItem item) {
UIToast.getInstance(getActivity()).show( "I am item1" );
}
});
IMenuItem item2 =
customGroup.addItem(AppResource.getDrawable(getActivity(),R.drawable. rd_delete_menu ), "delete" );
item2.setOnMenuItemClickListener( new IMenuItem.OnMenuItemClickListener() {
@Override
public void onClick(IMenuItem item) {
UIToast.getInstance(getActivity()).show( "I am item2" );
}
});

修改前: 修改后:




### 4.3 通过源代码自定义UI实现

在前面的章节中，我们详细地介绍了如何通过配置文件或者APIs对UI进行自定义。这些修改是基于

Foxit PDF SDK for Android的内置UI框架的。如果您不想使用当前现成的UI框架，您可以通过修改

UI Extensions组件中的源代码来重新设计UI。

为了自定义UI实现，您可以按照下面的步骤：

备注 ：在本节中，我们只介绍如何自定义UI Extensions组件中的UI，有关自定义扫描功能的UI，您

可以参考本节的教程。

首先 ，在您的工程中添加如下的文件，这些文件都在包中的"libs"文件夹下。

▪ uiextensions_src 工程 – 一个开源库，包含了一些即用型的UI模块实现，可以帮助开发人员

快速将功能齐全的PDF阅读器嵌入到他们的Android应用中。当然，开发人员也不是必须要

使用默认的UI，可以通过"uiextensions_src"工程为特定的应用灵活自定义和设计UI。

▪ FoxitRDK.aar – 包含JAR包，其中包括Foxit PDF SDK for Android的所有Java APIs，以及

".so"库。".so"库是SDK的核心包含了Foxit PDF SDK for Android的核心函数。它针对每种

架构单独编译，当期支持armeabi-v7a, arm64-v8a, x86, 和 x86_64架构。

备注 ： uiextensions_src 工程依赖于 FoxitRDK.aar ，因此最好将它们放在一个目录下。如果不

是，您需要在 uiextensions_src 工程的 " build.gradle "文件中手动修改 FoxitRDK.aar 的引用

路径。

其次 ，在 uiextensions_src 工程中定位到您需要自定义的XML布局文件，然后根据您的需求进行修

改。

为方便起见，我们将在"sample"文件夹下的" viewer_ctrl_demo " 中向您展示如何自定义UI实现。

### UI Customization Example UI自定义示例

步骤 1 ：向 " viewer_ctrl_demo " 中添加 uiextensions_src 工程，请确保其与 FoxitRDK.aar 文件

在一个目录下。如果您没有修改默认文件夹的层结构，那么它们就是在正确的位置。

备注 ：" viewer_ctrl_demo "已经添加了 FoxitRDK.aar 的引用，因此我们只需要通过配置

"settings.gradle"文件来添加 uiextensions_src 工程。当添加 uiextensions_src 作为依赖后，需要

将 FoxitRDKUIExtensions.aar 的引用移除。




在Android Studio中加载 " viewer_ctrl_demo "。然后按照下面的步骤：

a) 在 "settings.gradle" 文件中，添加 uiextensions_src 工程，代码如下。

```

settings.gradle:

```
```

include ':app'
include ':uiextensions_src'
project( ':uiextensions_src' ).projectDir = new File( '../../libs/uiextensions_src/' )

```
重新编译gradle，则 uiextensions_src 工程会被添加到demo中，如Figure 4 - 8 所示。

```

Figure 4 - 8

```
b) 在demo中将 uiextensions_src 工程作为demo的依赖项。在app的 "build.gradle" 文件

中，添加implementation project( ":uiextensions_src" ) ，然后注释掉

implementation( name : 'FoxitRDKUIExtensions' , ext : 'aar' )，如下所示：

```

dependencies {
implementation 'androidx.appcompat:appcompat:1.2.0'
implementation 'com.google.android.material:material:1.2.0'
implementation 'androidx.multidex:multidex:2.0.1'
implementation (name: 'FoxitRDK' , ext: 'aar' )
// implementation(name:'FoxitRDKUIExtensions', ext:'aar')
implementation project(":uiextensions_src")
implementation 'com.edmodo:cropper:1.0.1'
implementation 'com.microsoft.identity.client:msal:2.+'
implementation(name: 'RMSSDK-4.2-release' , ext: 'aar' )
implementation(name: 'rms-sdk-ui' , ext: 'aar' )

```



```

implementation 'org.bouncycastle:bcpkix-jdk15on:1.60'
implementation 'org.bouncycastle:bcprov-jdk15on:1.60'
// RxJava
implementation "io.reactivex.rxjava2:rxjava:2.2.16"
implementation 'io.reactivex.rxjava2:rxandroid:2.1.1'
}

```
当进行更改后，重新编译gradle。然后，选择 " File - > Project Structure... " 打开 Project

Structure 对话框。在对话框中点击 " Dependencies - > app "，您可以看到该demo依赖于

uiextensions_src 工程，如Figure 4 - 9 。

```

Figure 4 - 9

```
恭喜您！您已经完成了第一步。

步骤 2 ：查找和修改与您需要自定义的UI相关的布局文件。

现在，我们将向您展示一个简单的示例，在搜索面板中修改button的图标，如Figure 4 - 10 所示。




```

Figure 4 - 10

```
要替换图标，我们只需要找到存储该button图标的位置，然后使用另一个具有相同名称的图标来替

换它。

在工程中，点击 " uiextensions_src - > src - > main - > res - > layout "，如Figure 4 - 11 所示。




```

Figure 4 - 11

```
在布局文件列表中，找到 " search_layout.xml " 文件，然后双击它。在Preview窗口中找到该按

钮，然后通过单击它来定位到其相关代码，如Figure 4 - 12 所示。

```

Figure 4 - 12

```
此时，可以看到该button的图标存储在 "drawable" 文件夹中，图标名称为 " ic_search_list "。只需

将其替换为您自己的图标即可。


## 开发者指南

例如，我们使用search next的图标 ("ic_search_next.xml" 与 "ic_search_list.xml" 在相同的文件夹

下) 来替换它。然后重新运行demo，使用搜索功能，可以看到底部搜索button的图标已更改，如

Figure 4 - 13 所示。

```

Figure 4 - 13

```
这只是一个简单的示例用来展示如何自定义UI实现。您可以作为参考，通过 uiextensions_src 工程

# 您可以自由的对特定的应用程序进行UI自定义和设计。




## 5 使用SDK API

Foxit PDF SDK for Android将所有功能实现封装在UI Extensions 组件中。如果您对功能实现的详细

过程感兴趣，请参考本节内容。

在本节中，我们将介绍Foxit PDF SDK for Android的主要功能，并列举相关示例来展示如何使用

Foxit PDF SDK Core API实现这些功能。

### 5.1 Render

PDF渲染是通过Foxit渲染引擎实现的，Foxit渲染引擎是一个图形引擎，用于将页面渲染到位图或平

台设备上下文。 Foxit PDF SDK提供了APIs用来设置渲染选项/flags，例如设置 flag来决定是否渲染

表单域和签名，是否绘制图像反锯齿 (anti-aliasing) 和路径反锯齿。可以使用以下APIs进行渲染：

• 渲染页面和注释时，首先使用Renderer.setRenderContentFlags接口来决定是否同时渲染页

面和注释，然后使用Renderer.startRender接口进行渲染。Renderer.startQuickRender接

口也可以用来渲染页面，但仅用于缩略图。

• 渲染单个annotation注释，使用Renderer.renderAnnot接口。

• 在位图上渲染，使用Renderer.startRenderBitmap接口。

• 渲染一个重排的页面，使用 Renderer.startRenderReflowPage接口。

在Foxit PDF SDK中，Widget注释常与表单域和表单控件相关联。渲染widget注释，推荐使用如下

的流程：

• 加载PDF页面后，首先渲染页面以及该页面上所有的注释 (包括widget注释)。

• 然后，如果使用pdf.interform.Filler对象来填表，则应使用pdf.interform.Filler.render接口

来渲染当前获取到焦点的表单控件，而不是使用Renderer.renderAnnot接口。

Example:

5.1.1 如何将指定的PDF页面渲染到bitmap

import com.foxit.sdk.PDFException;
import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.common.Progressive;




import com.foxit.sdk.common.Renderer;
import com.foxit.sdk.common.fxcrt.Matrix2D;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.PDFPage;
...

public Bitmap renderPageToBitmap(PDFPage pdfPage, int drawPageWidth, int drawPageHeight) {

try {

// If the page hasn't been parsed yet, throw an exception.

if (pdfPage.isParsed()) {

throw new PDFException(Constants. e_ErrNotParsed , "PDF Page should be parsed first" );

}

// Pepare matrix to render on the bitmap.

Matrix2D matrix2D = pdfPage.getDisplayMatrix( 0 , 0 , drawPageWidth, drawPageHeight,

Constants. e_Rotation0 );

// Create a bitmap according to the required drawPageWidth and drawPageHeight.

Bitmap bitmap = Bitmap.createBitmap(drawPageWidth, drawPageHeight, Bitmap.Config. RGB_565 );

// Fill the bitmap with white color.

bitmap.eraseColor(Color. WHITE );

Renderer renderer = new Renderer(bitmap, true );

// Set the render flag, both page content and annotation will be rendered.

renderer.setRenderContentFlags(Renderer. e_RenderPage | Renderer. e_RenderAnnot );

// Start to render the page progressively.

Progressive progressive = renderer.startRender(pdfPage, matrix2D, null );

int state = Progressive. e_ToBeContinued ;

while (state == Progressive. e_ToBeContinued ) {

state = progressive.resume();

}

if (state != Progressive. e_Finished ) return null ;

return bitmap;

} catch (PDFException e) {

e.printStackTrace();

}

return null ;

}




### 5.2 Text Page

Foxit PDF SDK提供APIs来提取，选择，搜索和检索PDF文档中的文本。 PDF文本内容存储在与特

定页面相关的TextPage对象中。 TextPage类可用于检索PDF页面中文本的信息，例如单个字符，

单个单词，指定字符范围或矩形内的文本内容等。它还可用于构造其他文本相关类的对象，用来对文

本内容执行更多操作或从文本内容访问指定信息：

• 在PDF页面的文本内容中搜索文本，使用TextPage对象来构建TextSearch对象。

• 访问类似超文本链接的文本，使用TextPage对象来构建PageTextLinks对象。

• 高亮PDF页面上的选中文本，构建一个TextPage对象来计算选中文本区域。

Example:

5.2.1 如何通过选择获取页面上的文本区域

import com.foxit.sdk.PDFException;
import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.common.fxcrt.RectF;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.PDFPage;
import com.foxit.sdk.pdf.TextPage;
import com.foxit.sdk.common.fxcrt.PointF;
...

// Get the text area on page by selection. The starting selection position and ending selection position are
specified by startPos and endPos.
public ArrayList<RectF getTextRectsBySelection(PDFPage page, PointF startPos, PointF endPos) {
try {
// If the page hasn't been parsed yet, throw an exception.
if (page.isParsed()) {
throw new PDFException(Constants. e_ErrNotParsed , "PDF Page should be parsed first" );
}

// Create a text page from the parsed PDF page.
TextPage textPage = new TextPage(page, TextPage. e_ParseTextNormal );
if (textPage == null || textPage.isEmpty()) return null ;
int startCharIndex = textPage.getIndexAtPos(startPos.getX(), startPos.getY(), 5 );
int endCharIndex = textPage.getIndexAtPos(endPos.getX(), endPos.getY(), 5 );
// API getTextRectCount requires that start character index must be lower than or equal to end character
index.
startCharIndex = startCharIndex < endCharIndex? startCharIndex : endCharIndex;
endCharIndex = endCharIndex > startCharIndex? endCharIndex : startCharIndex;
int count = textPage.getTextRectCount(startCharIndex, endCharIndex - startCharIndex);




if (count > 0 ) {
ArrayList<RectF array = new ArrayList<RectF();
for ( int i = 0 ; i < count; i ++) {
RectF rectF = textPage.getTextRect(i);
if (rectF == null || rectF.isEmpty()) continue ;
array.add(rectF);
}
// The return rects are in PDF unit, if caller need to highlight the text rects on the screen, then these rects
should be converted in device unit first.
return array;
}
} catch (PDFException e) {
e.printStackTrace();
}
return null ;
}

### 5.3 Text Search

Foxit PDF SDK 提供APIs来搜索PDF文档、XFA文档、文本页面或者PDF注释中的文本。它提供了

文本搜索和获取搜索结果的函数：

• 指定搜索模式和选项，使用TextSearch.setPattern、TextSearch.setStartPage (仅对PDF文

档中的文本搜索有用)、TextSearch.setEndPage (仅对PDF文档中的文本搜索有用)、和

TextSearch.setSearchFlags接口。

• 进行搜索，使用TextSearch.findNext 和 TextSearch.findPrev接口。

• 获取搜索结果，使用TextSearch.getMatchXXX() 接口。

Example:

5.3.1 如何在PDF文档中搜索指定的文本模型

import com.foxit.sdk.PDFException;
import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.common.fxcrt.RectF;
import com.foxit.sdk.common.fxcrt.RectFArray;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.PDFPage;
import com.foxit.sdk.pdf.TextPage;
import com.foxit.sdk.common.fxcrt.PointF;
import com.foxit.sdk.pdf.TextSearch;
...




try {
String pdfpath = "XXX/Sample.pdf" ;
PDFDoc doc = new PDFDoc(pdfpath);
doc.load(null);

// Create a text search handler for searching in PDF document.

TextSearch textSearch = new TextSearch(doc, null , TextPage. e_ParseTextNormal );

// Set the start page index which searching will begin. By default, end page will be the last page.
textSearch.setStartPage( 0 );
// Set the text to be searched.
textSearch.setPattern( "foxit" );
// Set the search flags to be matching case and matching whole word.
textSearch.setSearchFlags(TextSearch. e_SearchMatchCase |TextSearch. e_SearchMatchWholeWord );
while (textSearch.findNext()) {
// If true, then we found a matched result.
// Get the found page index.
int pageIndx = textSearch.getMatchPageIndex();
// Get the start character index of the matched text on the found page.
int startCharIndex = textSearch.getMatchStartCharIndex();
// Get the end character index of the matched text on the found page.
int endCharIndex = textSearch.getMatchEndCharIndex();
// Get the rectangular region of the matched text on the found page.
RectFArray matchRects = textSearch.getMatchRects();
}
}
catch (Exception e) {}

### 5.4 Bookmark (Outline)

Foxit PDF SDK提供了名为Bookmarks的导航工具，允许用户在PDF文档中快速定位和链接他们感

兴趣的部分。PDF书签也称为outline，每个书签包含一个目标位置或动作来描述它链接到的位置。

它是一个树形的层次结构，因此在访问bookmark 树之前，必须首先调用接口

PDFDoc.getRootBookmark以获取整个bookmark树的root。这里，"root bookmark"是一个抽象

对象，它只有一些child bookmarks，没有next sibling bookmarks, 也没有任何数据 (包括

bookmark数据，目标位置数据和动作数据)。因为它没有任何数据，因此无法在应用程序界面上显

示，能够调用的接口只有 Bookmark.getFirstChild。

在检索root bookmark后，就可以调用以下的接口去访问其他的bookmarks:

• 访问parent bookmark，使用Bookmark.getParent接口。

• 访问第一个child bookmark，使用Bookmark.getFirstChild接口。

• 访问next sibling bookmark，使用Bookmark.getNextSibling接口。




• 插入一个新的bookmark，使用Bookmark.insert接口。

• 移动一个bookmark，使用Bookmark.moveTo接口。

Example:

5.4.1 如何使用深度优先顺序遍历PDF文档的bookmarks

import com.foxit.sdk.PDFException;
import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.pdf.Bookmark;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.actions.Destination;
...
private void DepthFistTravelBookmarkTree(Bookmark bookmark, PDFDoc doc) {
if (bookmark == null || bookmark.isEmpty())
return ;
try {
DepthFistTravelBookmarkTree(bookmark.getFirstChild(), doc);
while ( true ) {
// Get bookmark title.
String title = bookmark.getTitle();
Destination dest = bookmark.getDestination();
if (dest != null && !dest.isEmpty())
{
float left, right, top, bottom;
float zoom;
int pageIndex = dest.getPageIndex(doc);
// left,right,top,bottom,zoom are only meaningful with some special zoom modes.
int mode = dest.getZoomMode();
switch (mode) {
case Destination. e_ZoomXYZ :
left = dest.getLeft();
top = dest.getTop();
zoom = dest.getZoomFactor();
break ;
case Destination. e_ZoomFitPage :
break ;
case Destination. e_ZoomFitHorz :
top = dest.getTop();
break ;
case Destination. e_ZoomFitVert :
left = dest.getLeft();
break ;
case Destination. e_ZoomFitRect :
left = dest.getLeft();
bottom = dest.getBottom();




right = dest.getRight();
top = dest.getTop();
break ;
case Destination. e_ZoomFitBBox :
break ;
case Destination. e_ZoomFitBHorz :
top = dest.getTop();
break ;
case Destination. e_ZoomFitBVert :
left = dest.getLeft();
break ;
default :
break ;
}
}
bookmark = bookmark.getNextSibling();
if (bookmark == null || bookmark.isEmpty())
break ;
DepthFistTravelBookmarkTree(bookmark.getFirstChild(), doc);
}
}
catch (Exception e) {
}
}

### 5.5 Reading Bookmark

Reading bookmark不是PDF bookmark，换句话说，它不是PDF outlines。Reading bookmark是

应用层的书签。它存储在目录的元数据（XML格式）中，允许用户根据他们的阅读偏好添加或删除

reading bookmark，并通过选择reading bookmark可以轻松导航到一个PDF页面。

为了检索reading bookmark，可以调用PDFDoc.getReadingBookmarkCount接口来计算其个数，

并且可以调用PDFDoc.getReadingBookmark接口以索引方式获取相应的reading bookmark。

此类提供了接口用来获取/设置reading bookmarks属性，比如标题，目标页面索引，以及创建/修改

日期时间。

5.5.1 如何添加自定义reading bookmark并枚举所有的reading bookmarks

import com.foxit.sdk.PDFException;
import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.common.DateTime;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.ReadingBookmark;




// Add a new reading bookmark to pdf document, the returned bookmark stores the title and the page index.
ReadingBookmark addReadingBookmark(PDFDoc pdfDoc, String title, int pageIndex) {
int count = pdfDoc.getReadingBookmarkCount();
return pdfDoc.insertReadingBookmark(count,title,pageIndex);
}

// Enumerate all the reading bookmarks from the pdf document.
void getReadingBookmark(PDFDoc pdfDoc) {
try {
int count = pdfDoc.getReadingBookmarkCount();
for ( int i = 0 ; i < count; i ++) {
ReadingBookmark readingBookmark = pdfDoc.getReadingBookmark(i);
if (readingBookmark.isEmpty()) continue ;
// Get bookmark title.
String title = readingBookmark.getTitle();
// Get the page index which associated with the bookmark.
int pageIndex = readingBookmark.getPageIndex();
// Get the creation date of the bookmark.
DateTime creationTime = readingBookmark.getDateTime( true );
// Get the modification date of the bookmark.
DateTime modificationTime = readingBookmark.getDateTime( false );
}
} catch (PDFException e) {
e.printStackTrace();
}
}

### 5.6 Attachment

在Foxit PDF SDK中，attachments指的是文档附件而不是文件附件注释。它允许将整个文件封装在

文档中，就像电子邮件附件一样。Foxit PDF SDK提供应用程序APIs来访问附件，例如加载附件，获

取附件，插入/删除附件，以及访问附件的属性。

Example:

5.6.1 如何将指定文件嵌入到PDF文档

import com.foxit.sdk.PDFException;
import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.pdf.Attachments;
import com.foxit.sdk.pdf.FileSpec;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.objects.PDFNameTree;
...




try {
String pdfpath = "XXX/Sample.pdf" ;
PDFDoc doc = new PDFDoc(pdfpath);
doc.load(null);

// Embed the specified file to PDF document.
String filePath = "/xxx/fileToBeEmbedded.xxx" ;
PDFNameTree nameTree = new PDFNameTree(doc, PDFNameTree. e_EmbeddedFiles );
Attachments attachments = new Attachments(doc, nameTree);
FileSpec fileSpec = new FileSpec(doc);
fileSpec.setFileName(filePath);
if (!fileSpec.embed(filePath)) return ;
attachments.addEmbeddedFile(filePath, fileSpec);
} catch (PDFException e) {
e.printStackTrace();
}

5.6.2 如何从PDF文档中导出嵌入的附件文件，并将其另存为单个文件

import com.foxit.sdk.PDFException;
import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.pdf.Attachments;
import com.foxit.sdk.pdf.FileSpec;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.objects.PDFNameTree;
...
try {
String pdfpath = "XXX/Sample.pdf" ;
PDFDoc doc = new PDFDoc(pdfpath);
doc.load(null);

PDFNameTree nameTree = new PDFNameTree(doc, PDFNameTree. e_EmbeddedFiles );
Attachments attachments = new Attachments(doc, nameTree);
// Extract the embedded attachment file.
int count = attachments.getCount();
for ( int i = 0 ; i < count; i ++) {
String key = attachments.getKey(i);
if (key != null ) {
FileSpec fileSpec1 = attachments.getEmbeddedFile(key);
String exportedFile = "/somewhere/" + fileSpec1.getFileName();
if (fileSpec1 != null && !fileSpec1.isEmpty()) {
fileSpec1.exportToFile(exportedFile);
}
}
}
} catch (PDFException e) {




e.printStackTrace();
}
...

### 5.7 Annotation

一个annotation注释将对象（如注释，线条和高亮）与PDF文档页面上的位置相关联。 PDF包括如

Table 5 - 1 中列出的各种标准注释类型。在这些注释类型中，许多被定义为标记注释，因为它们主要用

于标记PDF文档。Table 5 - 1 中的 "Markup" 列用来说明是否为标记注释。

Foxit PDF SDK支持PDF Reference中定义的大多数注释类型。Foxit PDF SDK提供了注释创建，属

性访问和修改，外观设置和绘制的APIs。

```

Table 5 - 1

```
Annotation type Description Markup

Supported

by SDK

```

Text(Note) Text annotation Yes Yes
Link Link Annotation No Yes
FreeText
(TypeWriter/TextBox/Callout)

```
```

Free text annotation Yes Yes

```
```

Line Line annotation Yes Yes
Square Square annotation Yes Yes
Circle Circle annotation Yes Yes
Polygon Polygon annotation Yes Yes
PolyLine PolyLine annotation Yes Yes
Highlight Highlight annotation Yes Yes
Underline Underline annotation Yes Yes
Squiggly Squiggly annotation Yes Yes
StrikeOut StrikeOut annotation Yes Yes
Stamp Stamp annotation Yes Yes
Caret Caret annotation Yes Yes
Ink(pencil) Ink annotation Yes Yes
Popup Popup annotation No Yes

```
```

File Attachment FileAttachment
annotation

```
Yes  Yes
Sound Sound annotation Yes No
Movie Movie annotation No No
Widget* Widget annotation No Yes
Screen Screen annotation No Yes
PrinterMark PrinterMark annotation No No
TrapNet Trap network annotation No No




Annotation type Description Markup

Supported

by SDK

```

Watermark* Watermark annotation No No
3D 3D annotation No No
Redact Redact annotation Yes Yes

```
备注 ： Foxit SDK支持名为PSI (pressure sensitive ink，压感笔迹) 的自定义注释类型。在PDF

规范中没有对该注释进行描述。通常，PSI用于手写功能，Foxit SDK将其视为PSI注释，以便其

他PDF产品可以对其进行相关处理。

Example:

5.7.1 如何向PDF页面中添加注释

import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.common.fxcrt.RectF;
import com.foxit.sdk.common.fxcrt.RectFArray;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.PDFPage;
import com.foxit.sdk.pdf.TextSearch;
import com.foxit.sdk.pdf.annots.Annot;
import com.foxit.sdk.pdf.annots.Note;
import com.foxit.sdk.pdf.annots.QuadPoints;
import com.foxit.sdk.pdf.annots.QuadPointsArray;
import com.foxit.sdk.pdf.annots.TextMarkup;
import com.foxit.sdk.common.fxcrt.PointF;
...
// Add text annot.
try {
String pdfpath = "xxx/Sample.pdf" ;
PDFDoc doc = new PDFDoc(pdfpath);
doc.load(null);
PDFPage pdfPage = doc.getPage( 1 );
RectF rect = new RectF( 100 , 100 , 120 , 120 );
Note note = new Note(pdfPage.addAnnot(Annot. e_Note , rect));
if (note == null || note.isEmpty()){
return ;
}
note.setIconName( "Comment" );
// Set color to blue.
note.setBorderColor(0xff0000ff);
note.setContent( "This is the note comment, write any content here." );
note.resetAppearanceStream();

// The following code demonstrates how to add hightlight annotation on the searched text.




TextSearch textSearch = new TextSearch(pdfPage.getDocument(), null , TextPage. e_ParseTextNormal );
if (textSearch == null || textSearch.isEmpty()){
return ;
}
// Suppose that the text for highlighting is "foxit".
textSearch.setPattern( "foxit" );
boolean bMatched = textSearch.findNext();
if (bMatched) {
RectFArray rects = textSearch.getMatchRects();
int rectCount = rects.getSize();
// Fill the quadpoints array according to the text rects of matched result.
QuadPointsArray arrayOfQuadPoints = new QuadPointsArray();
for ( int i = 0 ; i < rectCount; i++) {
rect = rects.getAt(i);
QuadPoints quadPoints = new QuadPoints();
PointF point = new PointF();
point.set(rect.getLeft(), rect.getTop());
quadPoints.setFirst(point);
point.set(rect.getRight(), rect.getTop());
quadPoints.setSecond(point);
point.set(rect.getLeft(), rect.getBottom());
quadPoints.setThird(point);
point.set(rect.getRight(), rect.getBottom());
quadPoints.setFourth(point);
arrayOfQuadPoints.add(quadPoints);
}
// Just set an empty rect to markup annotation, the annotation rect will be calculated according to the
quadpoints that set to it later.
rect = new RectF( 0 , 0 , 0 , 0 );
TextMarkup textMarkup = new TextMarkup(pdfPage.addAnnot(Annot. e_Highlight , rect));
// Set the quadpoints to this markup annot.
textMarkup.setQuadPoints(arrayOfQuadPoints);
// set to red.
textMarkup.setBorderColor(0xffff0000);
// set to thirty-percent opacity.
textMarkup.setOpacity(0.3f);
// Generate the appearance.
textMarkup.resetAppearanceStream();
}
} catch (Exception e) {}

5.7.2 如何删除PDF页面中的注释

import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.PDFPage;
import com.foxit.sdk.pdf.annots.Annot;




#...

try {
String pdfpath = "xxx/Sample.pdf" ;
PDFDoc doc = new PDFDoc(pdfpath);
doc.load(null);
PDFPage pdfPage = doc.getPage( 1 );
Annot annot = pdfPage.getAnnot( 0 );
if (annot == null || annot.isEmpty())
return ;
// Remove the first annot, so the second annot will become first.
pdfPage.removeAnnot(annot);
} catch (Exception e) {}

5.7.3 如何注册监听器接收注释事件

在接收注释事件之前需要提前注册注释监听器。具体参考下述代码。

import com.foxit.sdk.pdf.PDFPage;

import com.foxit.sdk.pdf.annots.Annot;

import com.foxit.uiextensions.UIExtensionsManager;

import com.foxit.uiextensions.annots.AnnotEventListener;

public class RegisterListener {

AnnotEventListener mAnnotEventListener = new AnnotEventListener () {

@Override

public void onAnnotAdded (PDFPage page, Annot annot) {

}

@Override

public void onAnnotWillDelete (PDFPage page, Annot annot) {

}

@Override

public void onAnnotDeleted (PDFPage page, Annot annot) {

}

@Override

public void onAnnotModified (PDFPage page, Annot annot) {

}

@Override

public void onAnnotChanged (Annot lastAnnot, Annot currentAnnot) {

}

};




void registerYourAnnotEventListener (UIExtensionsManager extensionsManager) {

// Call registerAnnotEventListener to register the annot event listener

to receive annot events

extensionsManager. getDocumentManager (). registerAnnotEventListener (mAnnotE

ventListener);

}

}

### 5.8 Form

Form（AcroForm）是用于收集用户交互信息的表单域的集合。Foxit PDF SDK提供了以编程方式查

看和编辑表单域的APIs。在PDF文档中，表单域通常用于收集数据。 Form类提供了APIs用来检索

表单域或表单控件，导入/导出表单数据，以及其他功能，例如：

• 检索表单域，使用Form.getFieldCount 和 Form.getField接口。

• 检索PDF页面中的表单控件，使用Form.getControlCount 和 Form.getControl接口。

• 从XML文件导入表单数据，使用Form.importFromXML接口；导出表单数据到XML文件，

使用Form.exportToXML接口。

• 检索form filler对象，使用Form.getFormFiller接口。

从FDF/XFDF文件中导入表单数据，或者导出数据到FDF/XFDF文件，请参考PDFDoc.importFromFDF

和 PDFDoc.exportToFDF 接口。

Example:

5.8.1 如何通过XML文件导入表单数据或将表单数据导出到XML文件

import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.interform.Form;
...

// Check if the document has a form.
try {
String pdfpath = "xxx/Sample.pdf" ;
PDFDoc doc = new PDFDoc(pdfpath);
doc.load(null);
boolean hasForm = doc.hasForm();
if (hasForm) {
// Create a form object from document.




Form form = new Form(doc);
// Export the form data to a XML file.
form.exportToXML( "/somewhere/export.xml" );
// Or import the form data from a XML file.
form.importFromXML( "/somewhere/export.xml" );
}
} catch (Exception e) {}

### 5.9 Security

Foxit PDF SDK提供了一系列加密和解密功能，以满足不同级别的文档安全保护。用户可以使用常规

密码加密和证书驱动加密，或使用自己的安全处理机制来自定义安全实现。

Example:

5.9.1 如何使用密码加密PDF文件

import com.foxit.sdk.PDFException;
import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.SecurityHandler;
import com.foxit.sdk.pdf.StdEncryptData;
import com.foxit.sdk.pdf.StdSecurityHandler;
...

// Encrypt the source pdf document with specified owner password and user password, the encrypted PDF will
be saved to the path specified by parameter savePath.
public boolean encryPDF(PDFDoc pdfDoc, byte [] ownerPassword, byte [] userPassword, String savePth) {
if (pdfDoc == null || (ownerPassword == null && userPassword == null ) || savePth == null )
return false ;
// The encryption setting data. Whether to encrypt meta data:true, User permission: modify,assemble,fill
form. Cipher algorithm:AES 128.
StdEncryptData encryptData = new StdEncryptData( true ,
PDFDoc. e_PermModify | PDFDoc. e_PermAssemble | PDFDoc. e_PermFillForm ,
SecurityHandler. e_CipherAES , 16 );

StdSecurityHandler securityHandler = new StdSecurityHandler();
try {
if (!securityHandler.initialize(encryptData, userPassword, ownerPassword)) return false ;
pdfDoc.setSecurityHandler(securityHandler);
if (!pdfDoc.saveAs(savePth, PDFDoc. e_SaveFlagNormal )) return false ;
return true ;
} catch (PDFException e) {
e.printStackTrace();
}




return false ;
}

### 5.10 Signature

PDF签名可用于创建和签署PDF文档的数字签名，从而保护文档内容的安全性并避免文档被恶意篡

改。它可以让接收者确保其收到的文档是由签名者发送的，并且文档内容是完整和未被经篡的。Foxit

PDF SDK提供APIs用来创建数字签名，验证签名的有效性，删除现有的数字签名，获取和设置数字

签名的属性，显示签名和自定义签名表单域的外观。

备注 ：Foxit PDF SDK提供了默认签名回调函数，支持如下两种类型的signature filter 和 subfilter:

(1) filter: Adobe.PPKLite subfilter: adbe.pkcs7.detached

(2) filter: Adobe.PPKLite subfilter: adbe.pkcs7.sha1

如果您使用以上任意一种的signature filter 和 subfilter，您可以直接签名PDF文档和验证签名的有

效性，而不需要注册自定义回调函数。

Example:

5.10.1 如何对PDF文档进行签名，并验证签名

import com.foxit.sdk.PDFException;
import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.common.Progressive;
import com.foxit.sdk.common.fxcrt.RectF;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.PDFPage;
import com.foxit.sdk.pdf.Signature;
...

// Sample code demonstrate signing and verifying of PDF signature.
public void addNewSignatureAndSign(PDFPage page, RectF rect) {
try {
// Add a new signature on the specified page rect.
Signature signature = page.addSignature(rect);
// Set the appearance flags, if the specified flag is on, then the associated key will be displayed on the
signature appearance.
signature.setAppearanceFlags(Signature. e_APFlagLabel | Signature. e_APFlagDN |
Signature. e_APFlagText
| Signature. e_APFlagLocation | Signature. e_APFlagReason | Signature. e_APFlagSigner );
// Set signer.
signature.setKeyValue(Signature. e_KeyNameSigner , "Foxit" );
// Set location.




signature.setKeyValue(Signature. e_KeyNameLocation , "AnyWhere" );
// Set reason.
signature.setKeyValue(Signature. e_KeyNameReason , "ANyReason" );
// Set contact info.
signature.setKeyValue(Signature. e_KeyNameContactInfo , "AnyInfo" );
// Set domain name.
signature.setKeyValue(Signature. e_KeyNameDN , "AnyDN" );
// Set description.
signature.setKeyValue(Signature. e_KeyNameText , "AnyContent" );
// Filter "Adobe.PPKLite" is supported by default.
signature.setFilter( "Adobe.PPKLite" );
// SubFilter "adbe.pkcs7.sha1" or "adbe.pkcs7.detached" are supported by default.
signature.setSubFilter( "adbe.pkcs7.detached" );

// The input PKCS#12 format certificate, which contains the public and private keys.
String certPath = "/somewhere/cert.pfx" ;
// Password for that certificate.
byte [] certPassword = "123" .getBytes();
String signedPDFPath = "/somewhere/signed.pdf" ;
// Start to sign the signature, if everything goes well, the signed PDF will be saved to the path specified by
"save_path".
Progressive progressive = signature.startSign(certPath, certPassword, Signature. e_DigestSHA1 ,
signedPDFPath, null , null );
if (progressive != null ) {
int state = Progressive. e_ToBeContinued ;
while (state == Progressive. e_ToBeContinued ) {
state = progressive.resume();
}
if (state != Progressive. e_Finished ) return ;
}

// Get the signatures from the signed PDF document, then verify them all.
PDFDoc pdfDoc = new PDFDoc(signedPDFPath);
int err = pdfDoc.load( null );
if (err != Constants. e_ErrSuccess ) return ;
int count = pdfDoc.getSignatureCount();
for ( int i = 0 ; i < count; i++) {
Signature sign = pdfDoc.getSignature(i);
if (sign != null && !sign.isEmpty()) {
Progressive progressive_1 = sign.startVerify( null , null );
if (progressive_1 != null ) {
int state = Progressive. e_ToBeContinued ;
while (state == Progressive. e_ToBeContinued ) {
state = progressive_1.resume();
}
if (state != Progressive. e_Finished ) continue ;
}
int verifiedState = sign.getState();




if ((verifiedState & sign. e_StateVerifyValid ) == sign. e_StateVerifyValid ) {
Log.d( "Signature" , "addNewSignatureAndSign: Signature" + i + "is valid." );
}
}
}
} catch (PDFException e) {
e.printStackTrace();
}
}

5.10.2 如何为签名设置定制化时间信息

通过Signature对象的 setSignTime方法不能改变时间格式。我们可以通过传递参数（时间字符串）

给签名词典来解决这个问题。具体参考下述代码。

import com.foxit.sdk.PDFException;
import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.common.Constants;
import com.foxit.sdk.common.Progressive;
import com.foxit.sdk.common.fxcrt.RectF;
import com.foxit.sdk.pdf.PDFDoc;
import com.foxit.sdk.pdf.PDFPage;
import com.foxit.sdk.pdf.Signature;
...

// Sample code demonstrate signing and verifying of PDF signature.
public void addNewSignatureAndSign(PDFPage page, RectF rect) {
try {
// Add a new signature on the specified page rect.
Signature signature = page.addSignature(rect);
// Set the appearance flags, if the specified flag is on, then the associated key will be displayed on the
signature appearance.
signature.setAppearanceFlags(Signature. e_APFlagLabel | Signature. e_APFlagDN |
Signature. e_APFlagText
| Signature. e_APFlagLocation | Signature. e_APFlagReason | Signature. e_APFlagSigner
| Signature. e_APFlagSigningTime );
// Set signer.
signature.setKeyValue(Signature. e_KeyNameSigner , "Foxit" );
// Set location.
signature.setKeyValue(Signature. e_KeyNameLocation , "AnyWhere" );
// Set reason.
signature.setKeyValue(Signature. e_KeyNameReason , "ANyReason" );
// Set contact info.
signature.setKeyValue(Signature. e_KeyNameContactInfo , "AnyInfo" );
// Set domain name.
signature.setKeyValue(Signature. e_KeyNameDN , "AnyDN" );
// Set description.
signature.setKeyValue(Signature. e_KeyNameText , "AnyContent" );




//DateTime dateTime = new DateTime();
// ...
//signature.setSignTime(dateTime);
// The default format of the Signature date is yyMMddhhmmss-TimeZone.
//Please refer to the following codes if you need to set the time of the custom format.
PDFDictionary dictionary = signature.getSignatureDict();
dictionary.setAtString("M", "2022/02/13 11:00:00"/* formatted time string*/);
// Filter "Adobe.PPKLite" is supported by default.
signature.setFilter( "Adobe.PPKLite" );
// SubFilter "adbe.pkcs7.sha1" or "adbe.pkcs7.detached" are supported by default.
signature.setSubFilter( "adbe.pkcs7.detached" );

// The input PKCS#12 format certificate, which contains the public and private keys.
String certPath = "/somewhere/cert.pfx" ;
// Password for that certificate.
byte [] certPassword = "123" .getBytes();
String signedPDFPath = "/somewhere/signed.pdf" ;
// Start to sign the signature, if everything goes well, the signed PDF will be saved to the path specified by
"save_path".
Progressive progressive = signature.startSign(certPath, certPassword, Signature. e_DigestSHA1 ,
signedPDFPath, null , null );
if (progressive != null ) {
int state = Progressive. e_ToBeContinued ;
while (state == Progressive. e_ToBeContinued ) {
state = progressive.resume();
}
if (state != Progressive. e_Finished ) return ;
}

// Get the signatures from the signed PDF document, then verify them all.
PDFDoc pdfDoc = new PDFDoc(signedPDFPath);
int err = pdfDoc.load( null );
if (err != Constants. e_ErrSuccess ) return ;
int count = pdfDoc.getSignatureCount();
for ( int i = 0 ; i < count; i++) {
Signature sign = pdfDoc.getSignature(i);
if (sign != null && !sign.isEmpty()) {
Progressive progressive_1 = sign.startVerify( null , null );
if (progressive_1 != null ) {
int state = Progressive. e_ToBeContinued ;
while (state == Progressive. e_ToBeContinued ) {
state = progressive_1.resume();
}
if (state != Progressive. e_Finished ) continue ;
}
int verifiedState = sign.getState();
if ((verifiedState & sign. e_StateVerifyValid ) == sign. e_StateVerifyValid ) {
Log.d( "Signature" , "addNewSignatureAndSign: Signature" + i + "is valid." );




#}

#}

#}

} catch (PDFException e) {
e.printStackTrace();
}
}




## 6 创建自定义工具

使用Foxit PDF SDK for Android创建自定义工具非常简单。 UI Extensions Component中已经实现

了一些工具，开发人员可以在这些工具的基础上进行二次开发，或者参考这些工具来创建新的工具。

为了快速创建自己的工具，我们建议您参阅 "libs" 文件夹下的 uiextensions_src 工程。

创建一个新的自定义工具，最主要的步骤是创建一个Java类，然后实现 " ToolHandler.java " 接口。

在本节中，我们通过创建一个区域屏幕截图工具来展示如何使用Foxit PDF SDK for Android创建一

个自定义工具。该工具帮助用户在PDF页面中选择一个区域进行截图，并将其保存为图片。现在，让

我们开始吧。

为方便起见，我们将基于 "samples" 文件夹下的 " viewer_ctrl_demo " 工程来构建该工具。实现该工

具的步骤如下：

• 创建名为 ScreenCaptureToolHandler 的Java类，该类实现 " ToolHandler.java " 接口。

• 处理 onTouchEvent 和 onDraw 事件。

• 实例化 ScreenCaptureToolHandler 对象，然后将其注册到UIExtensionsManager。

• 将 ScreenCaptureToolHandler 对象设置为当前的tool handler。

### 步骤1: 创建一个名为 ScreenCaptureToolHandler 的Java类，该类实现" ToolHandler.java "接

口。

a) 在Android Studio中加载 " viewer_ctrl_demo " 工程。在 "com.foxit.pdf.viewctrl" 包中创建

名为 " ScreenCaptureToolHandler " 的Java类。

b) ScreenCaptureToolHandler.java类实现ToolHandler接口，如Figure 6 - 1 所示。




```

Figure 6 - 1

```
### 步骤 2: 处理 onTouchEvent 和 onDraw 事件。

更新 ScreenCaptureToolHandler.java ，如下所示：

package com.foxit.pdf.pdfviewer;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.PointF;
import android.graphics.Rect;
import android.graphics.RectF;
import android.view.MotionEvent;
import android.widget.Toast;

import com.foxit.sdk.PDFViewCtrl;
import com.foxit.sdk.PDFException;
import com.foxit.sdk.common.Progressive;
import com.foxit.sdk.common.fxcrt.Matrix2D;
import com.foxit.sdk.pdf.PDFPage;
import com.foxit.sdk.common.Renderer;
import com.foxit.uiextensions.ToolHandler;
import com.foxit.uiextensions.UIExtensionsManager;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;




public class ScreenCaptureToolHandler implements ToolHandler {

private Context mContext ;
private PDFViewCtrl mPdfViewCtrl ;

public ScreenCaptureToolHandler(Context context, PDFViewCtrl pdfViewCtrl) {
mPdfViewCtrl = pdfViewCtrl;
mContext = context;
}

@Override
public String getType() {
return "" ;
}

@Override
public void onActivate() {

}

@Override
public void onDeactivate() {

}

private PointF mStartPoint = new PointF( 0 , 0 );
private PointF mEndPoint = new PointF( 0 , 0 );
private PointF mDownPoint = new PointF( 0 , 0 );
private Rect mRect = new Rect( 0 , 0 , 0 , 0 );
private RectF mNowRect = new RectF( 0 , 0 , 0 , 0 );
private int mLastPageIndex = - 1 ;

// Handle OnTouch event
@Override
public boolean onTouchEvent( int pageIndex, MotionEvent motionEvent) {
// Get the display view point in device coordinate system
PointF devPt = new PointF(motionEvent.getX(), motionEvent.getY());
PointF point = new PointF();
// Convert display view point to page view point.
mPdfViewCtrl .convertDisplayViewPtToPageViewPt(devPt, point, pageIndex);
float x = point. x ;
float y = point. y ;

switch (motionEvent.getAction()) {
// Handle ACTION_DOWN event: get the coordinates of the StartPoint.
case MotionEvent. ACTION_DOWN :
if ( mLastPageIndex == - 1 || mLastPageIndex == pageIndex) {
mStartPoint. x = x;




mStartPoint. y = y;
mEndPoint. x = x;
mEndPoint. y = y;
mDownPoint .set(x, y);
if ( mLastPageIndex == - 1 ) {
mLastPageIndex = pageIndex;
}
}
return true ;

// Handle ACTION_Move event.
case MotionEvent. ACTION_MOVE :
if ( mLastPageIndex != pageIndex)
break ;
if (! mDownPoint .equals(x, y)) {
mEndPoint. x = x;
mEndPoint. y = y;

// Get the coordinates of the Rect.
getDrawRect( mStartPoint. x , mStartPoint. y , mEndPoint. x , mEndPoint. y );

// Convert the coordinates of the Rect from float to integer.
mRect .set(( int ) mNowRect. left , ( int ) mNowRect. top , ( int ) mNowRect. right , ( int )
mNowRect. bottom );

// Refresh the PdfViewCtrl, then the onDraw event will be triggered.
mPdfViewCtrl .refresh(pageIndex, mRect );
mDownPoint .set(x, y);
}
return true ;

// Save the selected area as a bitmap.
case MotionEvent. ACTION_UP :
if ( mLastPageIndex != pageIndex)
break ;
if (! mStartPoint .equals( mEndPoint. x , mEndPoint. y )) {
renderToBmp(pageIndex, "/mnt/sdcard/ScreenCapture.bmp" );
Toast.makeText( mContext , "The selected area was saved as a bitmap stored in the
/mnt/sdcard/ScreenCapture.bmp" , Toast. LENGTH_LONG ).show();
}
mDownPoint .set( 0 , 0 );
mLastPageIndex = - 1 ;
return true ;
default :
return true ;
}
return true ;
}




// Save a bimap to a specified path.
public static void saveBitmap(Bitmap bm, String outPath) throws IOException {
File file = new File(outPath);
file.createNewFile();

FileOutputStream fileout = null ;
try {
fileout = new FileOutputStream(file);
} catch (FileNotFoundException e) {
e.printStackTrace();
}

bm.compress(Bitmap.CompressFormat. JPEG , 100 , fileout);
try {
fileout.flush();
fileout.close();
} catch (IOException e) {
e.printStackTrace();
}
}

// Render the selected area to a bitmap.
private void renderToBmp( int pageIndex, String filePath) {
try {
PDFPage page = mPdfViewCtrl .getDoc().getPage(pageIndex);

mPdfViewCtrl .convertPageViewRectToPdfRect( mNowRect , mNowRect , pageIndex);
int width = ( int ) page.getWidth();
int height = ( int ) page.getHeight();

Bitmap bmp = Bitmap.createBitmap(width, height, Bitmap.Config. ARGB_8888 );
bmp.eraseColor(Color. WHITE );

// Create a Renderer object
Renderer renderer = new Renderer(bmp, true );

// Get the display matrix.
Matrix2D matrix = page.getDisplayMatrix( 0 , 0 , width, height, 0 );
Progressive progress = renderer.startRender(page, matrix, null );
int state = Progressive. e_ToBeContinued ;
while (state == Progressive. e_ToBeContinued ) {
state = progress.resume();
}

// Create a bitmap with the size of the selected area.
bmp = Bitmap.createBitmap(bmp, ( int ) mNowRect. left , ( int ) (height - mNowRect. top ), ( int )
mNowRect .width(), ( int ) Math.abs( mNowRect .height()));




try {
saveBitmap(bmp, filePath);
} catch (IOException e) {
e.printStackTrace();
}
} catch (PDFException e) {
e.printStackTrace();
}
}

// Get the coordinates of a Rect.
private void getDrawRect( float x1, float y1, float x2, float y2) {
float minx = Math.min(x1, x2);
float miny = Math.min(y1, y2);
float maxx = Math.max(x1, x2);
float maxy = Math.max(y1, y2);

mNowRect. left = minx;
mNowRect. top = miny;
mNowRect. right = maxx;
mNowRect. bottom = maxy;
}

@Override
public boolean onLongPress( int pageIndex, MotionEvent motionEvent) {
return false ;
}

@Override
public boolean onSingleTapConfirmed( int pageIndex, MotionEvent motionEvent) {
return false ;
}

@Override
public boolean isContinueAddAnnot() {
return false ;
}

@Override
public void setContinueAddAnnot( boolean continueAddAnnot) {

}

// Handle the drawing event.
@Override
public void onDraw( int i, Canvas canvas) {
if (((UIExtensionsManager) mPdfViewCtrl .getUIExtensionsManager()).getCurrentToolHandler() != this )
return ;




if ( mLastPageIndex != i) {
return ;
}
canvas.save();
Paint mPaint = new Paint();
mPaint.setStyle(Paint.Style. STROKE );
mPaint.setAntiAlias( true );
mPaint.setDither( true );
mPaint.setColor(Color. BLUE );
mPaint.setAlpha( 200 );
mPaint.setStrokeWidth( 3 );
canvas.drawRect( mNowRect , mPaint);
canvas.restore();
}
}

### 步骤 3: 实例化 ScreenCaptureToolHandler 对象，然后将其注册到UIExtensionsManager。

private ScreenCaptureToolHandler screenCapture = null ;

...

screenCapture = new ScreenCaptureToolHandler( mContext , pdfViewCtrl );
uiExtensionsManager .registerToolHandler( screenCapture );

### 步骤 4 ： 将 ScreenCaptureToolHandler 对象设置为当前的tool handler。

uiExtensionsManager .setCurrentToolHandler( screenCapture );

现在，我们已经完成了自定义工具的创建。为了验证该工具，我们需要在MainActivity.java中添加一

个action 菜单，以及步骤 3 和步骤 4 中的代码。

首先 ，在 "app/src/main/res/menu" 目录下的 Main.xml 文件中添加一个action菜单，如下所示。

< item
android:id="@+id/ScreenCapture"
android:title="@string/screencapture" />

在 "app/src/main/res/values/strings.xml" 中，添加以下字符串：

< string name="screencapture" >ScreenCapture</ string >

然后 ，将以下代码添加到 MainActivity.java 中的 onActionItemClicked() 函数中。

if (itemId == R.id.ScreenCapture) {
if (screenCapture == null) {
screenCapture = new ScreenCaptureToolHandler(mContext, pdfViewCtrl);
uiExtensionsManager.registerToolHandler(screenCapture);
}




uiExtensionsManager.setCurrentToolHandler(screenCapture);
}

请首先实例化一个 ScreenCaptureToolHandler 对象，如 ( private ScreenCaptureToolHandler

screenCapture = null ;)。

完成上述所有工作后，可以编译和运行demo了。

备注 : 在这里，我们使用AVD 10.0来运行该demo。请确保您已经将 "Sample.pdf" 文档添加到模拟

器SD卡中的正确位置 (与demo中的文件路径匹配) 。

当编译完demo并在模拟器上安装APK后，在弹出的窗口点击 " Allow " 允许demo访问设备上的文

件。点击页面上的任意位置，会出现上下文操作栏，然后点击 (更多按钮) ，找到 ScreenCapture

菜单项，如Figure 6 - 2 所示。

```

Figure 6 - 2

```



单击 ScreenCapture ，在PDF页面长按并选择一个矩形区域，然后将弹出一个如Figure 6 - 3 所示的

消息框。该消息框指示bitmap (选定区域) 保存的位置。

```

Figure 6 - 3

```



为了验证该工具是否成功截取和保存了所选区域，我们需要找到保存的屏幕截图。单击IDE右下角的

Device File Explorer ，可以在SD卡中看到名为 "ScreenCapture.bmp" 的屏幕截图，如Figure 6 - 4

所示。

```

Figure 6 - 4

```



右键单击 "ScreenCapture.bmp" 图片，选择 " Save AS... " 将其保存到所需的位置。打开图片，可以

看到其如Figure 6 - 5 所示。

```

Figure 6 - 5

```
如您所见，我们已成功创建了区域屏幕截图工具。这只是一个示例，用来说明如何使用Foxit PDF

## SDK for Android创建自定义工具。您可以参考该示例或者我们的demos来开发您需要的工具。


## 10 FAQ

### 10.1 从指定的PDF文件路径打开一个PDF文档

如何从指定的PDF文件路径打开一个PDF文档？

Foxit PDF SDK for Android提供了多个接口用来打开PDF文档。您可以从指定的PDF文件路径或从

内存缓冲区打开一个PDF文档。对于指定的PDF文件路径，有两种方法可以使用。

第一种是使用 openDoc 接口，该接口包括以下的操作：创建PDF文档对象( PDFDoc(String

path) )，加载文档内容( load )，以及将PDF文档对象设置给视图控件( setDoc )。以下是示例代码：

备注 ： openDoc 接口仅可用于从文件路径打开PDF文档。如果需要自定义加载PDF文档，可以在回

调函数 ( FileRead ) 中实现，然后使用带有回调函数 FireRead 的 PDFDoc (FileRead fileRead) 接口

创建文档对象。接下来，使用 load 加载文档内容，并使用 setDoc 将PDF文档对象设置给视图控

件。

// Assuming A PDFViewCtrl has been created.

// Open an unencrypted PDF document from a specified PDF file path.
String path = "/mnt/sdcard/input_files/Sample.pdf" ;
pdfViewCtrl .openDoc(path, null );

第二种是使用 PDFDoc(String path) 接口创建PDF文档对象，使用 load 接口加载文档内容，然后

使用 setDoc 将PDF文档对象设置给视图控件。以下是示例代码：

// Assuming A PDFViewCtrl has been created.

String path = "/mnt/sdcard/input_files/Sample.pdf" ;
try {
// Initialize a PDFDoc object with the path to the PDF file.
PDFDoc document = new PDFDoc(path);

// Load the unencrypted document content.
document.load( null );

// Set the document to view control.
pdfViewCtrl .setDoc(document);
} catch (Exception e) {
// TODO Auto-generated catch block




e.printStackTrace();
}

### 10.2 打开PDF文档时显示指定的页面

如何在打开PDF文档时，显示指定的页面？

为了在打开PDF文档时显示指定的页面，您需要使用接口 gotoPage (int pageIndex) 。Foxit PDF

SDK for Android使用多线程来提高渲染速度，因此您需要确保在使用 gotoPage 接口之前，文档已

经被成功加载。

请在 IDocEventListener 中实现回调接口，然后在 onDocOpened 事件中调用 gotoPage 接口。以

下是示例代码：

// Assuming A PDFViewCtrl has been created.

// Register the PDF document event listener.
pdfViewCtrl .registerDocEventListener( docListener );

// Open an unencrypted PDF document from a specified PDF file path.
String path = "/mnt/sdcard/input_files/Sample.pdf" ;
pdfViewCtrl .openDoc(path, null );

...

PDFViewCtrl.IDocEventListener docListener = new PDFViewCtrl.IDocEventListener() {
@Override
public void onDocWillOpen() {}

@Override
public void onDocOpened(PDFDoc pdfDoc, int errCode) {
pdfViewCtrl .gotoPage( 2 );
}

@Override
public void onDocWillClose(PDFDoc pdfDoc) { }

@Override
public void onDocClosed(PDFDoc pdfDoc, int i) { }

@Override
public void onDocWillSave(PDFDoc pdfDoc) { }

@Override
public void onDocSaved(PDFDoc pdfDoc, int i) { }




#};

### 10.3 License key和序列号无法正常工作

从网站下载的SDK包，未进行任何更改，为什么license key和序列号无法正常工作？

通常，上传到网站的包，里面的license key和序列号是可以正常工作的。在上传到网站之前是经过

测试的。因此，如果您发现license key和序列号无法使用，则可能是由设备的日期引起的。如果您

设备的时间在下载包 "libs" 文件夹下 rdk_key.txt 文件中的StartDate之前，则 "librdk.so" 库将无法

解锁。请检查您设备的日期。

### 10.4 在PDF文档中添加link注释

如何在PDF文档中添加link注释？

为了将link注释添加到PDF文档，首先需要调用 PDFPage.addAnnot 将一个link注释添加到指定

页面，然后调用 Action.Create 创建一个action，并将该action设置给刚添加的link注释。以下是

在PDF首页添加一个URI link注释的示例代码：

private Link linkAnnot = null ;
...

String path = "mnt/sdcard/input_files/sample.pdf" ;
try {

// Initialize a PDFDoc object with the path to the PDF file.
PDFDoc document = new PDFDoc(path);

// Load the unencrypted document content.
document.load( null );

// Get the first page of the PDF file.
PDFPage page = document.getPage( 0 );

// Add a link annotation to the first page.
linkAnnot = new Link (page.addAnnot(Annot. e_Link , new RectF( 250 , 650 , 400 , 750 )));

// Create a URI action and set the URI.
URIAction uriAction = new URIAction(Action.create(document, Action. e_TypeURI ));
uriAction.setURI( "www.foxitsoftware.com" );

// Set the action to link annotation.
linkAnnot .setAction(uriAction);

// Reset appearance stream.




linkAnnot .resetAppearanceStream();

// Save the document that has added the link annotation.
document.saveAs( "mnt/sdcard/input_files/sample_annot.pdf" , PDFDoc. e_SaveFlagNormal );

} catch (Exception e) {
e.printStackTrace();
}

### 10.5 向PDF文档中插入图片

如何向PDF文档中插入图片？

有两种方法可以帮助您将图片插入到PDF文档中。第一钟是调用

PDFPage.addImageFromFilePath 接口。您可以参考如下示例代码，该代码将图片插入到PDF文

档的首页：

备注 ：在调用 PDFPage.addImageFromFilePath 接口之前，您需要获取并解析将要添加图片的页

面。

String path = "mnt/sdcard/input_files/sample.pdf" ;
try {

// Initialize a PDFDoc object with the path to the PDF file.
PDFDoc document = new PDFDoc(path);

// Load the unencrypted document content.
document.load( null );

// Get the first page of the PDF file.
PDFPage page = document.getPage( 0 );

// Parse the page.
if (!page.isParsed()) {
Progressive parse = page.startParse( e_ParsePageNormal , null , false );
int state = Progressive. e_ToBeContinued ;
while (state == Progressive. e_ToBeContinued ) {
state = parse.resume();
}
}

// Add an image to the first page.
page.addImageFromFilePath( "mnt/sdcard/input_files/2.png" , new PointF( 20 , 30 ), 60 , 50 , true );

// Save the document that has added the image.
document.saveAs( "mnt/sdcard/input_files/sample_image.pdf" , PDFDoc. e_SaveFlagNormal );

} catch (Exception e) {




e.printStackTrace();
}

第二种是使用 PDFPage.addAnnot 接口在指定的页面添加一个stamp，然后将图片转换为位图，并

将位图设置给刚添加的stamp注释。您可以参考以下的示例代码，该代码将图片作为stamp注释插

入到PDF文件的首页：

String path = "mnt/sdcard/input_files/sample.pdf" ;
try {

// Initialize a PDFDoc object with the path to the PDF file.
PDFDoc document = new PDFDoc(path);

// Load the unencrypted document content.
document.load( null );

// Get the first page of the PDF file.
PDFPage page = document.getPage( 0 );

// Add a stamp annotation to the first page.
Stamp stamp = new Stamp(page.addAnnot(Annot. e_Stamp , new RectF( 100 , 350 , 250 , 150 )));

// Load a local image and convert it to a Bitmap.
Bitmap bitmap = BitmapFactory.decodeFile( "mnt/sdcard/input_files/2.png" );

// Set the bitmap to the added stamp annotation.
stamp .setBitmap(bitmap);

//Reset appearance stream.
stamp .resetAppearanceStream();

// Save the document that has added the stamp annotation.
document.saveAs( "mnt/sdcard/input_files/sample_image.pdf" , PDFDoc. e_SaveFlagNormal );

} catch (Exception e) {
e.printStackTrace();
}

### 10.6 SetDocModified API

当PDF文档已经被修改，是否存在一个API通知上层SDK？

是的。Android 版的Foxit PDF SDK提供一个内部API( SetDocModified )用来通知PDF文档已经被

修改的信息到上层SDK。例如：

// Assume you have already Initialized a UIExtensionsManager object.
uiExtensionsManager .getDocumentManager().setDocModified(true);




### 10.7 高亮PDF文档中的links和设置高亮颜色

如何设置是否高亮PDF文档中的links? 以及如何设置高亮的颜色？

默认情况下，高亮PDF文档中的links功能是启用的。如果您想要禁用它或者设置高亮颜色，可以通

过JSON文件 (仅支持6.3及以上版本) 或调用API进行设置。

备注 ：如果您需要设置高亮的颜色，请确保links高亮的功能是启用的。

通过JSON文件

设置 " "highlightLink" : false ," 在PDF文档中禁用links高亮功能。

设置 " "highlightLinkColor" : "#16007000" ," 设置高亮颜色 (输入您需要的颜色值)。

通过调用API

UIExtensionsManager.enableLinkHighlight() 接口用来设置是否在PDF文档中启用links高亮的

功能。如果您不需要启用该功能，请将其参数设置为 "false"，如下所示：

// Assume you have already Initialized a UIExtensionsManager object
uiExtensionsManager .enableLinkHighlight( false );

UIExtensionsManager.setLinkHighlightColor() 接口用来设置高亮的颜色。以下是调用此API的

示例代码：

// Assume you have already Initialized a UIExtensionsManager object
uiExtensionsManager .setLinkHighlightColor(0x4b0000ff);

### 10.8 高亮PDF文档中的表单域和设置高亮颜色

如何设置是否高亮PDF文档中的表单域? 以及如何设置高亮的颜色？

默认情况下，高亮PDF文档中的表单域功能是启用的。如果您想要禁用它或者设置高亮颜色，可以通

过JSON文件 (仅支持6.3及以上版本) 或调用API进行设置。

备注 ：如果您需要设置高亮的颜色，请确保表单域高亮的功能是启用的。

通过JSON文件

设置" "highlightForm" : false ," 在PDF文档中禁用表单域高亮功能。

设置" "highlightFormColor" : "#2000ffcc" ," 设置高亮颜色 (输入您需要的颜色值)。

通过调用API




UIExtensionsManager.enableFormHighlight() 接口用来设置是否在PDF文档中启用表单域高亮

的功能。如果您不需要启用该功能，请将其参数设置为 "false"，如下所示：

// Assume you have already Initialized a UIExtensionsManager object
uiExtensionsManager .enableFormHighlight( false );

UIExtensionsManager.setFormHighlightColor() 接口用来设置高亮的颜色。以下是调用此API的

示例代码：

// Set the highlight color to blue.
uiExtensionsManager .setFormHighlightColor(0x4b0000ff);




### 10.9 支持全文索引搜索

Foxit PDF SDK for Android是否支持全文索引搜索？如果支持，如何搜索在我的移动设备上离线存

储的PDF文件？

是的。Foxit PDF SDK for Android从5.0版本开始就支持全文索引搜索。

要使用此功能，请按照如下的步骤：

a) 根据目录来创建一个文档来源，该目录为文档的搜索目录。

```

public DocumentsSource(String directory)

```
b) 创建一个全文文本搜索对象，以及设置用于存储索引数据的数据库路径。

```

public FullTextSearch()

```
public void setDataBasePath(String pathOfDataBase)

c) 开始索引文档来源中的PDF文档。

```

public Progressive startUpdateIndex(DocumentsSource source,
PauseCallback pause, boolean reUpdate)

```
备注 ：您可以索引指定的PDF文件。例如，如果某个PDF文档的内容发生了更改，您可以使用以下

的API对其重新进行索引：

```

public boolean updateIndexWithFilePath(java.lang.String filePath)

```
d) 从索引数据源中搜索指定的内容。搜索的结果将通过指定的回调函数来返回给外部，每找到一个

匹配结果，则调用一次回调函数。

```

public boolean searchOf(java.lang.String matchString,
RankMode rankMode,
SearchCallback searchCallback)

```
如下是使用全文索引搜索的示例代码：

```

String directory = "A search directory..." ;
FullTextSearch search = new FullTextSearch();
try {
String dbPath = "The path of data base to store the indexed data..." ;
search.setDataBasePath(dbPath);
// Get document source information.
DocumentsSource source = new DocumentsSource(directory);

```
```

// Create a Pause callback object implemented by users to pause the updating process.
PauseUtil pause = new PauseUtil( 30 );

```



// Start to update the index of PDF files which receive from the source.
Progressive progressive = search.startUpdateIndex(source, pause, false );
int state = Progressive. e_ToBeContinued ;
while (state == Progressive. e_ToBeContinued ) {
state = progressive.resume();
}

// Create a callback object which will be invoked when a matched one is found.
MySearchCallback searchCallback = new MySearchCallback();

// Search the specified keyword from the indexed data source.
search.searchOf( "looking for this text" , RankMode. e_RankHitCountASC , searchCallback);
} catch (PDFException e) {
e.printStackTrace();
}

PauseUtil 回调的示例代码如下所示：

public class PauseUtil extends PauseCallback{
private long m_milliseconds = 0 ;
private long m_startTime = 0 ;

public PauseUtil( long milliSeconds) {
Date date = new Date();
m_milliseconds = milliSeconds;
m_startTime = date.getTime();
}

@Override
public boolean needToPauseNow() {
// TODO Auto-generated method stub
if ( this. m_milliseconds < 1 )
return false ;
Date date = new Date();
long diff = date.getTime() - m_startTime ;
if (diff > this. m_milliseconds ) {
m_startTime = date.getTime();
return true ;
} else
return false ;
}
}

MySearchCallback 回调的示例如下所示：

public class MySearchCallback extends SearchCallback {
private static final String TAG = MySearchCallback. class .getCanonicalName();

@Override
public void release() {
}




```

@Override
public int retrieveSearchResult(String filePath, int pageIndex, String matchResult, int
matchStartTextIndex, int matchEndTextIndex) {
String s = String.format( "Found file is :%s \n Page index is :%d Start text index :%d End text
index :%d \n Match is :%s \n\n" , filePath, pageIndex, matchStartTextIndex, matchEndTextIndex,
matchResult);
Log.v( TAG , "retrieveSearchResult: " + s);
return 0 ;
}
}

```
备注 ：

• Foxit PDF SDK for Android提供的全文索引搜索将以递归的方式遍历整个目录，以便搜索

目录下的文件和文件夹都会被索引。

• 如果需要中止索引进程，可以将pause回调参数传递给startUpdateIndex接口。其回调

函数needToPauseNow都会被调用，一旦完成一个PDF文档的索引。因此，调用者可以

在回调函数 needToPauseNow返回 "true" 时中止索引进程。

• 索引数据库的位置由setDataBasePath接口设置。如果要清除索引数据库，请手动清

除。目前，不支持从索引函数中删除指定文件相关的索引内容。

• searchOf 接口的每个搜索结果都由指定的回调返回到外部。一旦 searchOf 接口返回"true"

或 "false"，则表示搜索已完成。

### 10.10 打印PDF文档

Foxit PDF SDK for Android是否支持打印PDF文档？如果支持，如何使用？

是的。Foxit PDF SDK for Android从5.1版本开始支持打印PDF文档的功能。您可以在Complete

PDF viewer demo的More Menu View菜单中点击Wireless Print 按钮来打印PDF文档。此外，您

可以调用以下API来打印PDF文档：

// for iPhone and iTouch

public void startPrintJob(Context context, PDFDoc doc, String printJobName, String outputFileName,
IPrintResultCallback callback)

使用PDF打印功能的示例代码：

// Assume you have already Initialized a UIExtensionsManager object

PDFDoc doc = null ;




IPrintResultCallback print_callback = new IPrintResultCallback() {
@Override
public void printFinished() {
}

@Override
public void printFailed() {
}

@Override
public void printCancelled() {
}
};

try {
doc = new PDFDoc( "/mnt/sdcard/input_files/Sample.pdf" );
doc.load( null );
} catch (PDFException e) {
Assert.fail( "unexpect a PDF Exception!!errCode = " + e.getLastError());
}
uiExtensionsManager .startPrintJob(getActivity(), doc, "print with name" , "print_withAPI" , print_callback);
}

### 10.11 夜间模式颜色设置

如何设置夜间模式颜色？

设置夜间模式颜色，需要首先调用 PDFViewCtrl.setMappingModeBackgroundColor(int) 和

PDFViewCtrl.setMappingModeForegroundColor(int) 接口根据您的需要设置颜色，然后使用

PDFViewCtrl.setColorMode(int) 设置颜色模式。

备注 ：如果颜色模式已经设置为

Renderer.e_ColorModeMapping/Renderer.e_ColorModeMappingGray，在调用

PDFViewCtrl.setMappingModeBackgroundColor(int) 和

PDFViewCtrl.setMappingModeForegroundColor(int) 接口之后，您仍然需要再次设置。否则，

颜色设置可能不会起作用。

上述接口需要在UI Extensions组件的源代码中调用，请参考4.3小节 "通过源代码自定义UI实现"

将 "libs" 文件夹下的 "uiextensions_src" 工程添加到您的工程中。然后在

"com.foxit.uiextensions.pdfreader.impl.MainFrame.java" 文件中定位到 onValueChanged 函数，根

据您的需要设置颜色。

设置夜间模式颜色的示例代码：




case IViewSettingsWindow. TYPE_DAY :
mPageColorMode = (Integer) value;
if ( mPageColorMode == IViewSettingsWindow. DAY ) {
mUiExtensionsManager .getPDFViewCtrl().setBackgroundColor(AppResource.getColor( mContext ,
R.color.ux_bg_color_docviewer));
mUiExtensionsManager .getPDFViewCtrl().setNightMode( false );
} else if ( mPageColorMode == IViewSettingsWindow. NIGHT ) {
mUiExtensionsManager .getPDFViewCtrl().setBackgroundColor(Color.parseColor( "#36404A" ));

mUiExtensionsManager .getPDFViewCtrl().setNightMode( true );

mUiExtensionsManager .setNightColorMode(UIExtensionsManager. NIGHTCOLORMODE_MAPPINGGRAY );
if ( mUiExtensionsManager .getNightColorMode() ==
UIExtensionsManager. NIGHTCOLORMODE_MAPPINGGRAY ) {
mUiExtensionsManager .getPDFViewCtrl().setMappingModeForegroundColor(Color.argb(0xff, 0x00, 0xff,
0x00));
mUiExtensionsManager .getPDFViewCtrl().setMappingModeBackgroundColor(Color.argb(0xff, 0xff,
0x00, 0x00));
mUiExtensionsManager .getPDFViewCtrl().setColorMode(Renderer. e_ColorModeMappingGray );
}
}

### 10.12 输出exception/crash日志信息

如何在应用程序抛出异常或者crash时，输出exception/crash日志信息？

setExceptionLogger 接口用来输出exception/crash日志信息，该接口引用了第三方xCrash库。

其使用方法如下：

1) 添加XCrash依赖。

dependencies {
implementation 'com.iqiyi.xcrash:xcrash-android-lib:2.1.4'
}

2) 指定一个或多个ABI。

android {
defaultConfig {
ndk {
abiFilters 'armeabi' , 'armeabi-v7a' , 'arm64-v8a' , 'x86' , 'x86_64'
}
}
}

3) 在代码中调用 setExceptionLogger 。




public class MainApplication extends Application {
@Override
protected void attachBaseContext(Context base) {
super .attachBaseContext(base);
PDFViewCtrl.setExceptionLogger( this , "/mnt/sdcard/FoxitSDK/crash" , new
PDFViewCtrl.IExceptionLogger() {
@Override
public void onExceptionLogger(String filePath)

{ Log.d( "" , "onExceptionLogger: " + filePath); }
});
}
}

### 10.13 减小APK的大小

如何减小APK的大小？

要减少APK的大小，您可以编译多个包含特定屏幕密度或者ABI文件的APK。有关多APK更详细的

介绍，请参阅Build Multiple APKs。如下的代码片段是基于屏幕密度和ABI来配置多个APK，该代码

将添加到模块级的 build.gradle 文件中。

android {
...
splits {
// Configures multiple APKs based on screen density.
density {
// Configures multiple APKs based on screen density.
enable true
// Specifies a list of screen densities Gradle should not create multiple APKs for.
exclude "ldpi" , "xxhdpi" , "xxxhdpi"
// Specifies a list of compatible screen size settings for the manifest.
compatibleScreens 'small' , 'normal' , 'large' , 'xlarge'
}
// Configures multiple APKs based on ABI.
abi {
// Enables building multiple APKs per ABI.
enable true
// By default all ABIs are included, so use reset() and include to specify that we only
// want APKs for x86 and x86_64.
// Resets the list of ABIs that Gradle should create APKs for to none.
reset()
// Specifies a list of ABIs that Gradle should create APKs for.
include "x86" , "x86_64" , "armeabi-v7a" , "arm64-v8a"
// Specifies that we do not want to also generate a universal APK that includes all ABIs.
universalApk false
}
}
}




### 10.14 开启 shrink-code (设置 "minifyEnabled" 为 "true")

当在App's build.gradle中将 "minifyEnabled" 设置为 "true" 时，为什么在运行时会遇到一些异

常？

当在App's build.gradle中将 "minifyEnabled" 设置为 "true" 来开启shrink-code时，请注意您需

要在 proguard-rules.pro 文件中添加如下的内容，否则在运行时会抛出异常。

在 proguard-rules.pro 文件中，添加如下的内容:

- dontwarn com.foxit.sdk.
- keep class com.foxit.sdk.{ *; }
- dontwarn com.microsoft.rightsmanagement.
- keep class com.microsoft.rightsmanagement. { *; }
- dontwarn com.microsoft.aad.adal.
- keep class com.microsoft.aad.adal. { *; }
- dontwarn com.edmodo.cropper.
- keep class com.edmodo.cropper. { *; }
- dontwarn org.bouncycastle
- keep class org.bouncycastle. { *; }

### 10.15 本地化设置

如何进行本地化设置？

默认情况下，Foxit PDF SDK for Android会根据您系统的当前语言自动切换UI语言，前提是Foxit

PDF SDK for Android支持该语言。

当前，Foxit PDF SDK for Android 支持如下的语言：英语(English)，德语(German, de-CH, de-DE)，

拉丁语(Latin, es-LA)，法语(Frence, fr-FR)，意大利语(Italian, it-IT)，韩语(Korean, ko)，荷兰语

(Dutch, ni-NL)，葡萄牙语(Portuguese, pt-BR)，俄语(Russian, ru-Ru) 和 中文(Chinese, zh-CN, zh-

TW)。这些语言的资源文件位于 "libs\uiextensions_src\src\main\res" 文件夹下。

如果您需要使用自己本地的语言 (而该语言是Foxit PDF SDK for Android当前不支持的语言)，您需要

首先将UI上面所有的字段都翻译成本地的语言，其次将翻译后的资源文件放入您工程中其他语言资源

文件所在的同一目录中。然后，修改您系统的当前语言为您本地的语言，或者调用

Localization.setCurrentLanguage 接口使其生效。有关 Localization.setCurrentLanguage 接

口更详细的说明，请参阅 "doc" 目录下的API Reference。




例如，假如您需要将"complete_pdf_viewer" demo的UI语言改为，您可以按照如下的步骤：

a) 将"libs\uiextensions_src\src\main\res"目录下的 " values " (以此举例) 拷贝到demo的资源

目录 "samples\complete_pdf_viewer\app\src\main\res"，并将其重命名为" values-ja-

rJA "。

b) 翻译 (本地化) " values-ja-rJA " 文件夹下XML文件的所有字段。

c) 然后，采用如下两种方法中的任意一种使本地化语言生效：

• 将系统的当前语言修改为日文。

• 调用 Localization.setCurrentLanguage 接口将当前语言设置为日文。

```

Locale locale = new Locale( "ja" , "JA" );

```
Localization.setCurrentLanguage( this .getContext(), locale);

### 10.16 迁移到AndroidX.......................................................................................................................

如何将Foxit PDF SDK for Android迁移到AndroidX？

从7.2版本开始，Foxit PDF SDK for Android只支持AndroidX，不再支持Android support 库。因

此，如果您当前使用的是7.2版本之前的SDK，并且您需要升级SDK以便使用最新发布中的相关新功

能，那么您需要将Foxit PDF SDK for Android迁移到AndroidX。

迁移要求

• Android Studio version >= 3.2.0

• Gradle Build Tool >= 3.2.0

• Gradle Version >= 4.6

• compileSdkVersion >= 28

迁移

关于迁移，您可以参阅官方迁移文档。在本教程中，我们将以 "samples" 文件夹下的

complete_pdf_viewer demo为例来说明如何迁移到AndroidX。

1) 修改工程级的 "gradle.properties"。在 "gradle.properties" 文件中添加如下的内容：

```

android.useAndroidX=true
android.enableJetifier=true

```



2) 在app's "build.gradle" 中修改相关的依赖。

a) 将 compileSdkVersion 设置为 28 或以上：

b) 将工程级 "build.gradle" 中的 ' com.android.tools.build:gradle ' 升级到 3.2.0或更高版本。

c) 点击 Refactor > Migrate to AndroidX 开始迁移。




d) 升级第三方库。如果工程中的第三方库引用了Android support相关的库，那么第三方库也

需要迁移到AndroidX。

升级前 ，app's "build.gradle" 中的dependencies 如下所示：

```

dependencies {
implementation 'com.android.support:appcompat-v7:27.1.1'
implementation 'com.android.support:design:27.1.1'
implementation 'com.android.support:multidex:1.0.+'
implementation(name: 'FoxitRDK' , ext: 'aar' )
implementation(name: 'FoxitRDKUIExtensions' , ext: 'aar' )
implementation 'com.edmodo:cropper:1.0.1'
implementation( 'com.microsoft.aad:adal:1.1.16' ) {}
implementation(name: 'RMSSDK-4.2-release' , ext: 'aar' )
implementation(name: 'rms-sdk-ui' , ext: 'aar' )
// RxJava
implementation "io.reactivex.rxjava2:rxjava:2.2.2"
implementation 'io.reactivex.rxjava2:rxandroid:2.1.0'
implementation 'org.bouncycastle:bcpkix-jdk15on:1.60'
implementation 'org.bouncycastle:bcprov-jdk15on:1.60'
}

```
升级后 ，app's "build.gradle" 中的dependencies 如下所示：

```

dependencies {
implementation 'androidx.appcompat:appcompat:1.1.0'
implementation 'com.google.android.material:material:1.1.0'
implementation 'androidx.multidex:multidex:2.0.1'
implementation(name: 'FoxitRDK' , ext: 'aar' )
implementation(name: 'FoxitRDKUIExtensions' , ext: 'aar' )
implementation 'com.edmodo:cropper:1.0.1'
implementation( 'com.microsoft.aad:adal:1.16.3' ) {}
implementation(name: 'RMSSDK-4.2-release' , ext: 'aar' )
implementation(name: 'rms-sdk-ui' , ext: 'aar' )
// RxJava
implementation "io.reactivex.rxjava2:rxjava:2.2.16"
implementation 'io.reactivex.rxjava2:rxandroid:2.1.1'
implementation 'org.bouncycastle:bcpkix-jdk15on:1.64'
implementation 'org.bouncycastle:bcprov-jdk15on:1.64'
}

```
迁移后，您可以需要手动修改某些包名。因为，在自动迁移的过程中，有些包可能无法正确导入。另

外，您可能遇到一些其他的问题，在这种情况下，您需要根据具体的情况来解决相关的问题。




### 10.17 支持Chromebook....................................................................................................................

Foxit PDF SDK for Android是否支持Chromebook？

是的。Foxit PDF SDK for Android支持Chromebook。但是您需要在

AndroidManifest.xml文件中加入

" android:name="com.foxit.uiextensions.FoxitApplication" "。另外，如果您需要自定义a

pplication ，则需要继承 FoxitApplication类。

### 10.18 如何使用 UIExtensions 设置只读模式

1 ：接口定义

在UIExtensionsManager提供了以下接口：

/

* whether the pdf document can be modified

*

* @return whether the pdf document can be modified

*/

public boolean isEnableModification () {

return mIsEnableModify;

}

/

* Set whether the pdf document can be modified. The default is allow

modification.

*

* @param isEnabled whether the pdf document can be modified

*/

public void enableModification (boolean isEnabled) {

mIsEnableModify = isEnabled;

}

2 ：接口使用

默认情况下没有权限控制的文档是可以编辑的。如果需要禁用编辑相关的交互功能，可以通过以下方

法设置：

mUiExtensionsManager. enableModification (false);




### 10.19 怎样兼容 Android Studio 3. 2

如果您的Android 开发 IDE 仍然使用的是Android Studio 3.2，并且由于一些原因，不准备升级到

Anroid Studio 4.1，在编译RDK Demo的时候可能会遇到下面的错误：

要解决这个问题，可以按照下面步骤修改工程配置文件：

将Demo工程配置文件 ./build.gradle 中的 com.android.tools.build:gradle修改为3.3.3版本：

classpath 'com.android.tools.build:gradle:3.3.3'

将Demo工程配置文件 ./gradle/wrapper/gradle-wrapper.properties中的distributionUrl修改

为：

distributionUrl=https\://services.gradle.org/distributions/gradle-4.10.1-all.zip

