import defaultCanvasProps from './defaultCanvasProps.json';
const editor = {
    name: "editor",
    data: () => {
        return {
            canvas: null,
            defaultCanvasProps: defaultCanvasProps
        }
    },
    mounted() {
        this.initCanvas();
    },
    methods: {
        initCanvas(){

            this.canvas = new fabric.Canvas('canvas',this.defaultCanvasProps.canvasProps);
            this.canvas.manual_zoom = this.getFitToScreenZoom();
            this.makeArtBoard();
            this.fitCanvasToContainer();
            var rect = new fabric.Rect({
                top : 100,
                left : 100,
                width : 60,
                height : 70,
                fill : 'red'
            });
            this.canvas.add(rect);

            window.canvas = this.canvas;


        },
        makeArtBoard() {
            this.defaultCanvasProps.clipPath.width = this.canvas.canvasWidth;
            this.defaultCanvasProps.clipPath.height = this.canvas.canvasHeight;
            this.canvas.clipPath = new fabric.Rect(this.defaultCanvasProps.clipPath);
            this.canvas.renderAll();
        },
        getFitToScreenZoom() {
            // let domEl = this.$refs.canvasview;
            let domEl = window;
            let zoom = 1;
            if (domEl) {
                // let {offsetWidth, offsetHeight} = domEl;
                let {offsetWidth=innerWidth,offsetHeight=innerHeight} = domEl;
                let canvasWidth = parseInt(this.canvas.canvasWidth);
                let canvasHeight = parseInt(this.canvas.canvasHeight);
                canvasWidth += 5;
                canvasHeight += 5;
                let incrementFactor = 0.05;
                if (canvasWidth < offsetWidth && canvasHeight < offsetHeight) {
                    do {
                        zoom = zoom + incrementFactor;
                    } while (zoom * canvasWidth < offsetWidth && zoom * canvasHeight < offsetHeight)
                    zoom -= incrementFactor;
                } else {
                    while (zoom * canvasWidth > offsetWidth || zoom * canvasHeight > offsetHeight) {
                        zoom = zoom - incrementFactor;
                    }
                    zoom = zoom - incrementFactor;

                }
            }
            return zoom;
        },
        fitCanvasToContainer() {
            let {innerWidth,innerHeight} = window;
            // let {clientWidth,clientHeight} = this.$refs.canvasview;
            this.canvas.setHeight(innerHeight);
            this.canvas.setWidth(innerWidth);
            this.setZoomToPoint();
            this.setAbsolutePan();
        },
        setZoomToPoint(points = new fabric.Point(0, 0)) {
            this.canvas.zoomToPoint(points, this.canvas.manual_zoom);
        },
        setAbsolutePan() {
            let panX = this.canvas.width/2 - (this.canvas.canvasWidth*this.canvas.manual_zoom)/2,
                panY = this.canvas.height/2 - (this.canvas.canvasHeight*this.canvas.manual_zoom)/2;
            this.canvas.absolutePan(new fabric.Point(-panX,-panY));
        },

    }
}
export default editor