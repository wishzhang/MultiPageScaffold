<template>
  <div>
    <div class="container-header">
      <div class="left">
        <img :src="require('./back.png')" alt="" style="width:23px;height:44px;margin-right:32px;">
        <img :src="require('./del.png')" alt="" style="width:36px;height:36px;">
      </div>
      <div class="center">
        <slot name="title"></slot>
      </div>
      <div class="right"></div>
    </div>

    <div class="container-main">
      <slot name="main"></slot>
    </div>

    <div class="container-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ws-navbar-main-footer"
  }
</script>

<style scoped lang="scss">
  /*头部*/
  .container-header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 88px;
    padding: 0 30px;
    background-color: orange;
    background-image: url(./bg-header.png);

    .left {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    .center {
      position: fixed;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(100% - 30 * 2px);
      height: 88px;
      font-size: 34px;
      color: white;
      z-index: 0;
    }
  }


  /*主体*/
  .container-main {
    position: absolute;
    width: 100%;
    height: calc(100% - 88 * 2px);
    top: 88px;
  }

  /*末尾*/
  .container-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 88px;
    font-size: 22px;
    background-color: orange;

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 34px;

    background: -webkit-linear-gradient(#ff8901, #fa3810); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#ff8901, #fa3810); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#ff8901, #fa3810); /* Firefox 3.6 - 15 */
    background: linear-gradient(#ff8901, #fa3810); /* 标准的语法 */
  }

</style>
