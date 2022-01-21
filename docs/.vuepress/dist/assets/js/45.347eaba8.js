(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{485:function(n,a,e){"use strict";e.r(a);var s=e(25),r=Object(s.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p"),n._v(" "),e("h2",{attrs:{id:"一、类库接口描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、类库接口描述"}},[n._v("#")]),n._v(" 一、类库接口描述")]),n._v(" "),e("p",[n._v("1、IElement接口：允许开发者访问对象的几何属性，并且可以使用查询和绘出对象的方法，IMarkerElement是点要素的接口。")]),n._v(" "),e("p",[n._v("2、ISimpleMarkerSymbol 接口：简单点符号")]),n._v(" "),e("p",[n._v("3、IEnvelope接口：是指地物的外接矩形，用来表示地物图形的大体位置和形状")]),n._v(" "),e("p",[n._v("4、IPrinter接口：用来管理打印纸张设置")]),n._v(" "),e("p",[n._v("5、IPageLayout 接口：定义了用于修改页面布局的方法和属性")]),n._v(" "),e("p",[n._v("6、IActiveView接口 ：定义了Map对象的数据显示功能。通过使用该接口可以在Map上绘制图形，改变视图的范围，获取ScreenDisplay对象的指针，刷新视图")]),n._v(" "),e("p",[n._v("7、IGraphicsContainer接口：管理Map 和PageLayout 对象上储存的元素，使用IGraphicsContainer 接口可以添加，删除和更新位于Map 或PageLayout上的元素。")]),n._v(" "),e("p",[n._v("8、ILegend：图例接口")]),n._v(" "),e("h2",{attrs:{id:"二、操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、操作步骤"}},[n._v("#")]),n._v(" 二、操作步骤")]),n._v(" "),e("p",[n._v("1、设计界面")]),n._v(" "),e("p",[n._v("2、理清逻辑思路，设计功能")]),n._v(" "),e("p",[n._v("（1）通过“地图表现”切换“数据视图”与“布局视图”\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190827110715469.png",alt:"切换"}}),n._v("\n（2）在数据视图实现加载点和面要素")]),n._v(" "),e("p",[n._v("（在主界面中点击“加载点要素”按钮，在地图上进行点击添加，当再次点击“加载点要素”时，停止绘制；加载面要素同理。）\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190827110746115.png",alt:"在这里插入图片描述"}}),n._v("\n（3）在布局视图实现加载框架要素和打印功能")]),n._v(" "),e("p",[n._v("3、代码实现")]),n._v(" "),e("p",[n._v("4、测试")]),n._v(" "),e("h2",{attrs:{id:"三、相关代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、相关代码"}},[n._v("#")]),n._v(" 三、相关代码")]),n._v(" "),e("h3",{attrs:{id:"一-显示地图-的点击事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-显示地图-的点击事件"}},[n._v("#")]),n._v(" （一）“显示地图”的点击事件")]),n._v(" "),e("p",[e("strong",[n._v("1、功能：显示数据视图，与布局视图进行切换（“显示页面布局”的点击事件与其类似）")])]),n._v(" "),e("p",[e("strong",[n._v("2、代码")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("      private void miMap_Click(object sender, EventArgs e)\n        {\n            if (miMap.Checked == false)\n            {\n                axTOCControl1.SetBuddyControl(axMapControl1.Object);\n                axTOCControl1.SetBuddyControl(axMapControl1.Object);\n                axMapControl1.Show();\n                axPageLayoutControl1.Hide();\n                miMap.Checked = true;\n                miPageLayout.Checked = false;\n                miPrint.Enabled = false;\n                AddFrameElement.Enabled = false;\n                miAddMarker.Enabled = true;\n                miAddFill.Enabled = true;\n            }\n            else\n            {\n                axTOCControl1.SetBuddyControl(axPageLayoutControl1.Object);\n                axTOCControl1.SetBuddyControl(axPageLayoutControl1.Object);\n                axMapControl1.Hide();\n                axPageLayoutControl1.Show();\n                miMap.Checked = false;\n                miPageLayout.Checked = true;\n                miPrint.Enabled = true;\n                AddFrameElement.Enabled = true;\n                miAddMarker.Enabled = false;\n                miAddFill.Enabled = false;\n            }\n        }\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br")])]),e("h3",{attrs:{id:"二-创建点元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二-创建点元素"}},[n._v("#")]),n._v(" （二）创建点元素")]),n._v(" "),e("p",[e("strong",[n._v("1、功能：在数据视图上实现加载点元素")])]),n._v(" "),e("p",[e("strong",[n._v("2、代码如下：")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("public void AddMarkerElement(double x, double y)\n        {\n            IMarkerElement pMarkerElement = (IMarkerElement)new MarkerElement();//创建一个新的元素\n\n            ISimpleMarkerSymbol pMarkerSym = new SimpleMarkerSymbol(); //创建新符号\n            pMarkerSym.Style = esriSimpleMarkerStyle.esriSMSCircle;//指定符号的样式（风格)\n            pMarkerSym.Color = getRGB(255, 0, 0); //用函数设置符号的颜色为红色\n            //并把颜色赋给符号\n            pMarkerElement.Symbol = pMarkerSym;\n            IElement pElement;\n            pElement = pMarkerElement as IElement;\n            IPoint pPoint;\n            pPoint = new Point();\n            pPoint.PutCoords(x, y);\n            //Ipoint的PutCoords方法：指定坐标点建立Point\n            pElement.Geometry = pPoint;\n            IMap pMap = axMapControl1.Map;\n            IActiveView pActiveView = pMap as IActiveView;\n            IGraphicsContainer pGraphicsContainer = pMap as IGraphicsContainer;\n            pGraphicsContainer.AddElement(pElement, 0);\n            pActiveView.Refresh();\n            return;\n        }\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br")])]),e("h3",{attrs:{id:"三-创建面元素"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三-创建面元素"}},[n._v("#")]),n._v(" （三）创建面元素")]),n._v(" "),e("p",[e("strong",[n._v("1、功能：在数据视图上实现加载面元素")])]),n._v(" "),e("p",[e("strong",[n._v("2、代码如下：")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("public void AddFillElement()\n        {\n            ISimpleLineSymbol pSimpleLineSymbol = new SimpleLineSymbol();\n            pSimpleLineSymbol.Color = getRGB(255, 0, 0);\n            pSimpleLineSymbol.Width = 2;\n            //设置填充符号属性\n            ISimpleFillSymbol pSimpleFillSymbol = new SimpleFillSymbol();\n            pSimpleFillSymbol.Color = getRGB(255, 100, 80);\n            pSimpleFillSymbol.Outline = pSimpleLineSymbol;\n            pSimpleFillSymbol.Style = esriSimpleFillStyle.esriSFSSolid;\n            //设置填充元素符号属性\n            IFillShapeElement pFillShapeElement = (IFillShapeElement)new PolygonElement();\n            pFillShapeElement = new PolygonElementClass();\n            pFillShapeElement.Symbol = pSimpleFillSymbol;\n            IElement pElement;\n            pElement = pFillShapeElement as IElement;\n            IPolygon pPolygon;\n            pPolygon = axMapControl1.TrackPolygon() as IPolygon;\n            // Object.TrackPolygon( ) 在某个对象上画个多边形；\n            // Object.TrackRectangle ( ) 在某个对象上画个矩形；\n            pElement.Geometry = pPolygon;\n            IMap pMap = axMapControl1.Map;\n            IActiveView pActiveView = pMap as IActiveView;\n            IGraphicsContainer pGraphicsContainer = pMap as IGraphicsContainer;\n            pGraphicsContainer.AddElement(pElement, 0);\n            pActiveView.PartialRefresh(esriViewDrawPhase.esriViewGraphics, null, null);\n        }\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br")])]),e("h3",{attrs:{id:"四-加载图例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四-加载图例"}},[n._v("#")]),n._v(" （四）加载图例")]),n._v(" "),e("p",[e("strong",[n._v("1、功能：在布局视图上实现加载图例")])]),n._v(" "),e("p",[e("strong",[n._v("2、代码如下：")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('//获取axPageLayoutControl1的图形容器\n            IGraphicsContainer graphicsContainer =axPageLayoutControl1.GraphicsContainer;\n            //获取axPageLayoutControl1空间里面显示的地图图层\n            IMapFrame mapFrame =(IMapFrame)graphicsContainer.FindFrame(axPageLayoutControl1.ActiveView.FocusMap);\n            if (mapFrame == null) return;//创建图例\n            UID uID = new UID();\nuID.Value = "esriCarto.Legend";\n            \n            IMapSurroundFrame mapSurroundFrame = mapFrame.CreateSurroundFrame(uID, null);\n            if (mapSurroundFrame == null) return;\n            if (mapSurroundFrame.MapSurround == null) return;\n            mapSurroundFrame.MapSurround.Name = "图例";\n            IEnvelope envelope = new EnvelopeClass();\n            envelope.PutCoords(17, 2, 19, 7); \n            IElement element = (IElement)mapSurroundFrame;\n            element.Geometry = envelope;\n            //将图例转化为几何要素添加到axPageLayoutControl1,并刷新页面显示\n            axPageLayoutControl1.AddElement(element, Type.Missing, Type.Missing,"Legend", 0);\n            axPageLayoutControl1.ActiveView.PartialRefresh(esriViewDrawPhase.esriViewGraphics, null,null);\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br")])]),e("h3",{attrs:{id:"五-加载比例尺"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五-加载比例尺"}},[n._v("#")]),n._v(" （五）加载比例尺")]),n._v(" "),e("p",[e("strong",[n._v("1、功能：在布局视图上实现加载比例尺")])]),n._v(" "),e("p",[e("strong",[n._v("2、代码如下：")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('private void btnScalebar_Click(object sender, EventArgs e)\n        {\n             IActiveView pActiveView = axPageLayoutControl1.PageLayout as IActiveView;\n            IMap pMap = pActiveView.FocusMap as IMap;\n            IGraphicsContainer pGraphicsContainer = pActiveView as IGraphicsContainer;\n            IMapFrame pMapFrame = pGraphicsContainer.FindFrame(pMap) as IMapFrame;\n            pActiveView = axPageLayoutControl1.PageLayout as IActiveView;\n            pMap = pActiveView.FocusMap as IMap;\n            pGraphicsContainer = pActiveView as IGraphicsContainer;\n            pMapFrame = pGraphicsContainer.FindFrame(pMap) as IMapFrame;//设置比例尺样式\n            IMapSurround pMapSurround;\n            IScaleBar pScaleBar;\n            pScaleBar = new ScaleLineClass();\n            pScaleBar.Units = pMap.MapUnits;\n            pScaleBar.Divisions = 2;\n            pScaleBar.Subdivisions = 4;\n            pScaleBar.DivisionsBeforeZero = 0;\n            pScaleBar.LabelPosition = esriVertPosEnum.esriBelow;\n            pScaleBar.LabelGap = 3.6;\n            pScaleBar.LabelFrequency = esriScaleBarFrequency.esriScaleBarDivisionsAndFirstMidpoint;\n\n            pMapSurround = pScaleBar;\n            pMapSurround.Name = "ScaleBar";\n            //定义UID\n            UID uid = new UID();\n            uid.Value = "esriCarto.ScaleLine";\n            //定义MapSurroundFrame对象      \n            IMapSurroundFrame pMapSurroundFrame = pMapFrame.CreateSurroundFrame(uid, null);\n            pMapSurroundFrame.MapSurround = pMapSurround;\n            //定义Envelope设置Element摆放的位置\n            IEnvelope pEnvelope = new EnvelopeClass();\n            pEnvelope.PutCoords(2, 1.5, 10, 2.5);\n            IElement pElement = pMapSurroundFrame as IElement;\n            pElement.Geometry = pEnvelope;\n            pGraphicsContainer.AddElement(pElement, 0);\n\n        }\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br"),e("span",{staticClass:"line-number"},[n._v("32")]),e("br"),e("span",{staticClass:"line-number"},[n._v("33")]),e("br"),e("span",{staticClass:"line-number"},[n._v("34")]),e("br"),e("span",{staticClass:"line-number"},[n._v("35")]),e("br"),e("span",{staticClass:"line-number"},[n._v("36")]),e("br"),e("span",{staticClass:"line-number"},[n._v("37")]),e("br"),e("span",{staticClass:"line-number"},[n._v("38")]),e("br")])]),e("h3",{attrs:{id:"六-打印"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六-打印"}},[n._v("#")]),n._v(" （六）打印")]),n._v(" "),e("p",[e("strong",[n._v("1、功能：“打印”的点击事件")])]),n._v(" "),e("p",[e("strong",[n._v("2、代码如下：")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('private void miPrint_Click(object sender, EventArgs e)\n        {\n            IPrinter printer = axPageLayoutControl1.Printer;   \n            if (printer == null)\n            {\n                MessageBox.Show("获取默认打印机失败！");\n               \n            }\n            String sMsg = "是否使用默认打印机:" + printer.Name + "?";\n            if (MessageBox.Show(sMsg, "", MessageBoxButtons.OKCancel) == DialogResult.Cancel)\n            {\n                return;\n            }\n            IPaper paper = printer.Paper;\n            paper.Orientation = 1;\n\n            IPage page = axPageLayoutControl1.Page;\n            page.PageToPrinterMapping = esriPageToPrinterMapping.esriPageMappingScale;\n            axPageLayoutControl1.PrintPageLayout(1,1,0);\n        }\n\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/69dc516b067446d390da9f259264c6e2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5LqR5rKr5p2J,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);