<template>
    <div class="bg-indigo-100 border-4 h-14 lg:w-2/3 m-auto rounded-full">

        <span class="group relative">
            <button class="bg-white border-2 h-10 ml-4 rounded-full w-24 mt-1 py-2 px-4 inline-flex items-center">
                <span class="mr-1">1080</span>
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
            </button>
<!--            <nav class="absolute border group-focus-within:opacity-100 group-focus-within:translate-y-1 group-focus-within:visible invisible left-0 opacity-0 rounded transition-all">-->
<!--                <ul class="text-gray-700 pt-1">-->
<!--                    <li class="block px-4 py-2 hover:bg-gray-100"><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">1080</a></li>-->
<!--                    <li class="block px-4 py-2 hover:bg-gray-100"><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">1350</a></li>-->
<!--                    <li class="block px-4 py-2 hover:bg-gray-100"><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">607</a></li>-->
<!--                </ul>-->
<!--            </nav>-->
        </span>


        <span class="group relative">
            <button class="bg-white border-2 h-10 rounded-full w-24 mt-1"><span>Settings</span></button>
<!--               <nav class="absolute border group-focus-within:opacity-100 group-focus-within:translate-y-1 group-focus-within:visible invisible left-0 opacity-0 rounded transition-all">-->
<!--                <ul class="text-gray-700 pt-1">-->
<!--                    <li class="block px-4 py-2 hover:bg-gray-100"> <button class="bg-white border-2 h-10 rounded-full w-24 mt-1"><span>Zoom</span></button></li>-->
<!--                    <li class="block px-4 py-2 hover:bg-gray-100"> <button class="bg-white border-2 h-10 rounded-full w-24 mt-1"><span>Grid</span></button></li>-->
<!--                    <li class="block px-4 py-2 hover:bg-gray-100"> <button class="bg-white border-2 h-10 rounded-full w-24 mt-1"><span>Format</span></button></li>-->
<!--                </ul>-->
<!--            </nav>-->
        </span>
        <span class="group relative">
            <button class="bg-white border-2 h-10 rounded-full w-24 mt-1"><span>Elements</span></button>
<!--               <nav class="absolute border group-focus-within:opacity-100 group-focus-within:translate-y-1 group-focus-within:visible invisible left-0 opacity-0 rounded transition-all">-->
<!--                <ul class="text-gray-700 pt-1">-->
<!--                    <li class="block px-4 py-2 hover:bg-gray-100"> <button class="bg-white border-2 h-10 rounded-full w-24 mt-1"><span>Polygon</span></button></li>-->
<!--                    <li class="block px-4 py-2 hover:bg-gray-100"> <button class="bg-white border-2 h-10 rounded-full w-24 mt-1"><span>Square</span></button></li>-->
<!--                    <li class="block px-4 py-2 hover:bg-gray-100"> <button class="bg-white border-2 h-10 rounded-full w-24 mt-1"><span>Circle</span></button></li>-->
<!--                </ul>-->
<!--            </nav>-->
        </span>
        <button class="bg-white border-2 h-10 rounded-full w-24 mt-1">Add Text</button>
        <button class="bg-white border-2 h-10 px-3 rounded-full mt-1">Upload Images</button>
        <button class="bg-white border-2 h-10 rounded-full w-24 mt-1">Save</button>

    </div>
</template>

<script>
    export default {
        name: "ContentPanelBottomGrid"
    }
</script>

<style scoped>

</style>