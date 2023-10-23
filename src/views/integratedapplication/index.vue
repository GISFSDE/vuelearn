<template>
    <div>

        <ul>
            <li>
                <a href="#">英雄介绍</a>
                <div class="box"> //使用一个div盒子来装下拉的内容选项
                    <a href="#">裂空</a>
                    <a href="#">源氏</a>
                    <a href="#">麦克雷</a>
                    <a href="#">艾什</a>
                    <a href="#">安娜</a>
                </div>
            </li>
            <li>
                <a href="#">技能介绍</a>
                <div class="box">
                    <a href="#">脉冲炸弹</a>
                    <a href="#">巨龙来袭</a>
                    <a href="#">午时已到</a>
                    <a href="#">激素</a>
                    <a href="#">毁天灭地</a>
                </div>
            </li>
            <li>
                <a href="#">故事背景</a>
                <div class="box">
                    <a href="#">智械危机</a>
                    <a href="#">人工智能</a>
                    <a href="#">占领</a>
                    <a href="#">人工智能</a>
                    <a href="#">占领</a>
                </div>
            </li>
            <li>
                <a href="#">地图介绍</a>
                <div class="box">
                    <a href="#">巴黎</a>
                    <a href="#">66号公路</a>
                    <a href="#">釜山</a>
                    <a href="#">花村</a>
                    <a href="#">漓江塔</a>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'VuelearnIndex',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style  scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    /* background: url(./2.jpg) no-repeat;
    background-size: cover; */
}

header {
    height: 50px;
    width: 100%;
    background: linear-gradient(200deg, #e3c5eb, #a9c1ed);
}

ul {
    height: 50px;
    display: flex;
    list-style: none;
    justify-content: center;
    line-height: 50px;
}

li {
    text-align: center;
    width: 150px;
}

.box {
    background: linear-gradient(200deg, #e3c5eb, #a9c1ed);
    opacity: 0.9;
    /* 第1步：设置初始值 */
    height: 0;
    /* 因为初始值高度为0，我们需要将下拉列表中的文字全部隐藏 */
    overflow: hidden;
    /* 第3步：在要实现动画的标签上添加transition属性 */
    /* 设置动画 all所有发生变化的css属性都添加过渡（这里是高度变化，可以只设置高度）  过渡时间为1s */
    transition: all 1.5s;
}

a {
    /* 将a标签设置为块标签，a标签就会独占一行，有序排列成列表 */
    text-decoration: none;
    color: #555;
    display: block;
}

a:hover {
    background-color: deeppink;
}

li:hover .box {
    /* 第2步   动画，设置目标值 */
    height: 250px;
}
</style>