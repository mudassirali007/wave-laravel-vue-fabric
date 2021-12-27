import { fabric } from "fabric"

export default {
    name: "editor",
    mounted() {
        var canvas = new fabric.Canvas('mycanvas');
        console.log(canvas)
        var rect = new fabric.Rect({
            top : 100,
            left : 100,
            width : 60,
            height : 70,
            fill : 'red'
        });

        canvas.add(rect);
    }
}