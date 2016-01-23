/**
 * Created by Aaron on 2015/12/21.
 */
/*
magento添加调用block的几种方法

静态块主要是指在后台添加的可用静态块
调用方法常见的有如下几种：（这边就不介绍使用widgets 调用的方法了，有兴趣的朋友可以自己在后台widgets中尝试设置）
1、直接在HomePage中调用（只限首页）：
修改layout中的xml代码
<reference name=”content”>
<block type=”cms/block” name=”blockname” before=”-”>
<action method=”setBlockId”><id>block_id</id></action>
</block>
</reference>
通过修改reference 中的name属性值调整主体位置，通过block中的before或after属性值调整相对顺序
CMS 页以及static block还可以通过如下方法调用：
{{block type=”cms/block”�0�2 name=”user-block”�0�2 block_id=”one-block”}}
(其中的name为自定义的，block_id 为静态块的 identi)
2、直接在模板的 .phtml 中调用
<?php echo $this->getLayout()
->createBlock(‘cms/block’)
->setBlockId(‘block_id’)
->toHtml(); ?>
3、在对应的 .xml 中的目标位置调用
<block type=”cms/block” name=”blockname” as=”blockname” before=”-”>
<action method=”setBlockId”><id>block_id</id></action>
</block>
<!– 修改其中的 name�0�2 as 以及id 确保正确调用，修改before参数确保位置正确 –>
4、使用 getChildHtml() 方法调用（类似方法3）:
首先在page.xml文件中定义一个childhtml名称（这边用test代替）
可以参考before_body_end那段代码
<block type=”core/text_list” name=”before_body_end” as=”before_body_end”/>
定义自己需要的如：
<block type=”core/text_list” name=”test” as=”test”/>
然后将调用的代码添加到对应的XML布局文件的正确位置
例如这边我们插入到catalog.xml 中的<default>块中，这样就可以在任意页面调用，当然你也可以加到你想要的页面中。
<default><!–位于30行左右–>
<reference name=”test”>
<block type=”cms/block” name=”testname” before=”-”>
<action method=”setBlockId”><id>testblock</id></action>
</block>
</reference>
……
添加static block名称为testblock
内容自己定义，如：�0�2�0�2�0�2 <h1>This is a test Block!</h1>
到你想让这块内容出现的页面调用它
这边我们在1column.phtml中调用
<?php echo $this->getChildHtml(‘test’) ?>
5.应用实例：
产品查看页以 Zencart 风格调出产品多图展示
catalog.xml
<!–
Product view
–>部分，找到<block type=”catalog/product_view_media” name=”product.info.media” as=”media” template=”catalog/product/view/media.phtml”/>
复制并加以修改为：
<block type=”catalog/product_view_media” name=”product.info.mediagallery” as=”media_gallery” template=”catalog/product/view/mediagallery.phtml”/>
其中mediagallery.phtml 文件代码可参考media.phtml 文件根据需要进行相应修改
然后
在Product view.phtml 中 对应位置添加以下代码（css样式自行调整）即可
<div style=text-align:center;”>
<?php echo $this->getChildHtml(‘media_gallery’) ?>
</div>
*/

