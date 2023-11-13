import{_ as i,r as o,o as l,c,a as n,b as s,d as t,e}from"./app-e1a13da4.js";const d="/RDK_Example/assets/installation_package_structure_description-5316b88b.png",r="/RDK_Example/assets/installation_lib_img-c5d07e45.png",p={},u=n("h1",{id:"快速上手",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#快速上手","aria-hidden":"true"},"#"),s(" 快速上手")],-1),m=n("h2",{id:"下载开发包",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#下载开发包","aria-hidden":"true"},"#"),s(" 下载开发包")],-1),v={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"提示",-1),b={href:"https://developers.foxitsoftware.cn/version/pdfsdk-Android/",target:"_blank",rel:"noopener noreferrer"},g=e(`<h4 id="系统要求" tabindex="-1"><a class="header-anchor" href="#系统要求" aria-hidden="true">#</a> 系统要求</h4><ul><li>Android 设备要求 <ul><li>Android 4.4(API 19)或更高版本</li><li>32/64-bit ARM (armeabi-v7a/arm64-v8a) or 32/64-bit Intel x86 CPU</li></ul></li><li>Android Studio 3.2 or newer (支持AndroidX)</li></ul><h5 id="包中demos的运行环境" tabindex="-1"><a class="header-anchor" href="#包中demos的运行环境" aria-hidden="true">#</a> 包中Demos的运行环境</h5><ul><li>Android Studio 4.1</li><li>JDK 1.8</li><li>Gradle Version 4.6</li><li>Gradle Build Tool 3.2</li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>从7.2版本开始，Foxit PDF SDK for Android将只支持AndroidX，而不再支持Android support library。</p></div><h4 id="包结构说明" tabindex="-1"><a class="header-anchor" href="#包结构说明" aria-hidden="true">#</a> 包结构说明</h4><p>从官网下载到开发包打开后如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs                             &lt;--- API手册，开发文档和升级说明文档
├─ icc_profile                      &lt;--- 输出预览功能所使用的默认icc profile文件
├─ libs                             &lt;--- License文件，AAR，UI Extensions组件源代码
│  ├─ pdfscan                       &lt;--- 扫描功能组件源码
│  ├─ uiextensions_src              &lt;--- UI Extensions组件库源码
│  ├─ FoxitRDK.aar                  &lt;--- Foxit PDF SDK for Android核心包
│  ├─ FoxitRDKUIExtensions.aar      &lt;--- 提供UI Extensions组件所需要的库
│  ├─ FoxitMobileScanningRDK.aar    &lt;--- 提供扫描功能所需要的库
│  ├─ FoxitPDFScan-UI.aar           &lt;--- 提供实现扫描功能所需UI的Android Activities
│  ├─ RMSSDK-x.x-release.aar        &lt;--- 微软权限管理系统的软件开发包
│  ├─ rms-sdk-ui.aar                &lt;--- 提供实现RMS SDK功能所需UI的Android Activities
│  ├─ rdk_key.txt                   &lt;--- 示例 License key
│  └─ rdk_sn.txt                    &lt;--- 示例 License sn
├─ samples                          &lt;--- Android示例工程
│  ├─ function_demo                 &lt;--- PDF Core API 示例
│  ├─ viewer_ctrl_demo              &lt;--- PDF View Control 示例
│  ├─ complete_pdf_viewer           &lt;--- UI Extensions 示例
│  └─ test_files                    &lt;--- 示例文件
├─ getting_started_android.pdf      &lt;--- Foxit PDF SDK for Android快速入门
├─ legal.txt                        &lt;--- 法律和版权信息
└─ release_notes.txt                &lt;--- 发布信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="installation_package_structure_description.png"></p><table><thead><tr><th>文件名</th><th>描述</th></tr></thead><tbody><tr><td>docs</td><td>API手册，开发文档和升级说明文档</td></tr><tr><td>icc_profile</td><td>输出预览(output preview)功能所使用的默认icc profile文件</td></tr><tr><td>libs</td><td>License文件，AAR，UI Extensions组件源代码</td></tr><tr><td>samples</td><td>Android示例工程</td></tr><tr><td>getting_started_android.pdf</td><td>Foxit PDF SDK for Android快速入门</td></tr><tr><td>legal.txt</td><td>法律和版权信息</td></tr><tr><td>release_notes.txt</td><td>发布信息</td></tr></tbody></table><h2 id="手动安装" tabindex="-1"><a class="header-anchor" href="#手动安装" aria-hidden="true">#</a> 手动安装</h2><p>将libs下的依赖包按需导入项目</p><p><img src="'+r+'" alt="installation_lib_img.png"></p><h4 id="libs目录说明" tabindex="-1"><a class="header-anchor" href="#libs目录说明" aria-hidden="true">#</a> libs目录说明</h4>',14),x=n("thead",null,[n("tr",null,[n("th",null,"包名"),n("th",null,"描述")])],-1),h=n("tr",null,[n("td",null,"FoxitRDK.aar"),n("td",null,'Foxit PDF SDK for Android的所有Java APIs，以及".so"库。".so"库是SDK的核心包含了Foxit PDF SDK for Android的核心函数。它针对每种架构单独编译，当期支持armeabi-v7a, arm64-v8a, x86,和x86_64架构。')],-1),_=n("tr",null,[n("td",null,"uiextensions_src"),n("td",null,'一个开源库，包含了一些即用型的UI模块实现，可以帮助开发人员快速将功能齐全的PDF阅读器嵌入到他们的Android应用中。当然，开发人员也不是必须要使用默认的UI，可以通过"uiextensions_src"工程为特定的应用灵活自定义和设计UI。')],-1),f=n("tr",null,[n("td",null,"FoxitRDKUIExtensions.aar"),n("td",null,"内置UI实现，以及UI所需要的资源文件，如图片，字符串、颜色值、布局文件以及其他Android UI资源。")],-1),D=n("tr",null,[n("td",null,"FoxitMobileScanningRDK.aar"),n("td",null,"提供扫描功能所需要的库。")],-1),F=n("tr",null,[n("td",null,"FoxitPDFScan-UI.aar"),n("td",null,"提供实现扫描功能所需UI的Android Activities。")],-1),A=n("td",null,"RMSSDK-x.x-release.aar",-1),S={href:"https://www.microsoft.com/en-ie/download/details.aspx?id=43673",target:"_blank",rel:"noopener noreferrer"},I=n("td",null,"rms-sdk-ui.aar",-1),K={href:"https://github.com/AzureAD/rms-sdk-ui-for-android",target:"_blank",rel:"noopener noreferrer"},y=n("tr",null,[n("td",null,"pdfscan"),n("td",null,"一个开源库，包含了扫描功能相关的UI实现，可以帮助开发人员快速将扫描功能集成到他们的Android应用中，或者根据需要自定义扫描功能的UI。")],-1),U={class:"custom-container warning"},P=n("p",{class:"custom-container-title"},"注意",-1),q={href:"https://developer.android.com/studio/build/shrink-code.html",target:"_blank",rel:"noopener noreferrer"},R=e(`<h3 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h3><ul><li><strong>步骤1：</strong> 将&quot;libs&quot;目录定义为 repository。在 app 下面的 build.gradle 文件中，配置如下的代码：</li></ul><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>repositories <span class="token punctuation">{</span>
    flatDir <span class="token punctuation">{</span>
        dirs <span class="token string">&#39;libs&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>步骤2：</strong> 启用Multi-Dex。在app下面的build.gradle文件中，配置如下的代码：</li></ul><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>android <span class="token punctuation">{</span>
  defaultConfig <span class="token punctuation">{</span>
      <span class="token punctuation">...</span>
      minSdkVersion <span class="token number">15</span>
      targetSdkVersion <span class="token number">33</span>
      multiDexEnabled <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">...</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;androidx.multidex:multidex:2.0.1&quot;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>步骤3：</strong> 在工程级build.gradle文件中，配置如下代码</li></ul><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>allprojects<span class="token punctuation">{</span>
  repositories<span class="token punctuation">{</span>
    <span class="token function">google</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">mavenCentral</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    maven <span class="token punctuation">{</span>
      url <span class="token string">&#39;https://pkgs.dev.azure.com/MicrosoftDeviceSDK/DuoSDK-Public/_packaging/Duo-SDK-Feed/maven/v1&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>步骤4：</strong> 将Foxit PDF SDK for Android作为工程的依赖项。在app下面的&quot;build.gradle&quot;文件中，添加&quot;FoxitRDK.aar&quot;, &quot; FoxitRDKUIExtensions.aar&quot;以及相关支持的库到dependencies。为简单起见，如下所示更新dependencies：</li></ul><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span>
    <span class="token punctuation">...</span>
    implementation <span class="token string">&#39;androidx.appcompat:appcompat:1.6.1&#39;</span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;androidx.multidex:multidex:2.0.1&quot;</span></span>
    <span class="token comment">//  UI Extensions 使用了material来封装UI，如果使用UI Extensions一定要添加</span>
    implementation <span class="token string">&#39;com.google.android.material:material:1.8.0&#39;</span>
    <span class="token comment">//  Foxit PDF Core API 及 PDF View Control</span>
    <span class="token function">implementation</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string">&#39;FoxitRDK&#39;</span><span class="token punctuation">,</span> ext<span class="token punctuation">:</span> <span class="token string">&#39;aar&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">//  UI Extensions组件</span>
    <span class="token function">implementation</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string">&#39;FoxitRDKUIExtensions&#39;</span><span class="token punctuation">,</span> ext<span class="token punctuation">:</span> <span class="token string">&#39;aar&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">//  (可选)如果您需要使用截图功能</span>
    implementation <span class="token string">&#39;com.edmodo:cropper:1.0.1&#39;</span>
    <span class="token comment">//  (可选)如果您需要打开RMS加密的PDF文档</span>
    <span class="token function">implementation</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string">&#39;RMSSDK-4.2-release&#39;</span><span class="token punctuation">,</span> ext<span class="token punctuation">:</span> <span class="token string">&#39;aar&#39;</span><span class="token punctuation">)</span>
    <span class="token function">implementation</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string">&#39;rms-sdk-ui&#39;</span><span class="token punctuation">,</span> ext<span class="token punctuation">:</span> <span class="token string">&#39;aar&#39;</span><span class="token punctuation">)</span>
    implementation <span class="token string">&#39;com.microsoft.identity.client:msal:3.0.+&#39;</span>
    <span class="token comment">//  (可选)如果您需要使用扫描功能</span>
    <span class="token function">implementation</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string">&#39;FoxitPDFScan-UI&#39;</span><span class="token punctuation">,</span> ext<span class="token punctuation">:</span> <span class="token string">&#39;aar&#39;</span><span class="token punctuation">)</span>
    <span class="token function">implementation</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token string">&#39;FoxitMobileScanningRDK&#39;</span><span class="token punctuation">,</span> ext<span class="token punctuation">:</span> <span class="token string">&#39;aar&#39;</span><span class="token punctuation">)</span>
    implementation <span class="token string">&#39;com.nostra13.universalimageloader:universal-image-loader:1.9.5&#39;</span>
    <span class="token comment">//  (可选)如果您需要使用对比功能</span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;io.reactivex.rxjava2:rxjava:2.2.16&quot;</span></span>
    implementation <span class="token string">&#39;io.reactivex.rxjava2:rxandroid:2.1.1&#39;</span>
    <span class="token comment">//  (可选)如果您需要使用签名功能</span>
    implementation <span class="token string">&#39;org.bouncycastle:bcpkix-jdk15on:1.60&#39;</span>
    implementation <span class="token string">&#39;org.bouncycastle:bcprov-jdk15on:1.60&#39;</span>
    <span class="token punctuation">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>app下完整build.gradle如下：</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>Gradle版本的不同配置方式会有差异</p></div><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><p>初始化Foxit PDF SDK for Android。在调用任何API之前，应用程序必须使用license初始化Foxit PDF SDK forAndroid。Library.initialize(sn, key)函数用于SDK库的初始化。试用license文件在下载包的&quot;libs&quot; 文件夹下。当试用期结束后，您需要购买正式license以继续使用该SDK。下面是SDK库初始化的示例代码。在下一节中将介绍该代码在PDFReader工程中的位置。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>foxit<span class="token punctuation">.</span>sdk<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">Library</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>foxit<span class="token punctuation">.</span>sdk<span class="token punctuation">.</span>common<span class="token punctuation">.</span></span><span class="token class-name">Constants</span></span><span class="token punctuation">;</span>

<span class="token keyword">int</span> errorCode <span class="token operator">=</span> <span class="token class-name">Library</span><span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span>sn<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>errorCode <span class="token operator">!=</span> <span class="token class-name">Constants</span><span class="token punctuation">.</span>e_ErrSuccess<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>sn的值在&quot;rdk_sn.txt&quot;中(&quot;SN=&quot;后面的字符串)</p><p>key的值在&quot;rdk_key.txt&quot;中(&quot;Sign=&quot;后面的字符串)。</p></div>`,15);function E(w,C){const a=o("ExternalLinkIcon");return l(),c("div",null,[u,m,n("div",v,[k,n("p",null,[n("a",b,[s("福昕官网下载链接"),t(a)])])]),g,n("table",null,[x,n("tbody",null,[h,_,f,D,F,n("tr",null,[A,n("td",null,[s("微软权限管理系统的软件开发包。更多详细信息，"),n("a",S,[s("请参考"),t(a)]),s(".")])]),n("tr",null,[I,n("td",null,[s("提供实现RMS SDK功能所需UI的Android Activities。更多详细信息，"),n("a",K,[s("请参考"),t(a)]),s(".")])]),y])]),n("div",U,[P,n("p",null,[s('为了减小FoxitRDKUIExtensions.aar的文件大小，Foxit PDF SDK for Android在uiextensions_src工程中使用shrink-code技术。如果您在编译Uiextensions_src工程时，不需使用 shrink-code，您可以在App下的build.gradle中通过设置"minifyEnabled"为"false"来进行禁用。关 于shrink-code，'),n("a",q,[s("请参考"),t(a)]),s(".")])]),R])}const j=i(p,[["render",E],["__file","installation.html.vue"]]);export{j as default};
