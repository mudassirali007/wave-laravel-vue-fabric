<template>
    <div id="canvasview" ref="canvasview">
        <canvas id="canvas"></canvas>
    </div>

</template>

<script src="~/canvas">

</script>

<style scoped>
    #canvasview{
        background-image: repeating-linear-gradient(to bottom, transparent, transparent 5px, #eaeaea 5px, #eaeaea 10px),
        repeating-linear-gradient(to right, #f1f1f1, #f1f1f1 5px, #eaeaea 5px, #eaeaea 10px);
    }
</style>