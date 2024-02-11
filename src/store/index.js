import { proxy } from "valtio"


const state = proxy({
    intro:true,//validate wether we are in our home page or not
    color:"#efbd48",
    isLogoTexture:true,
    isFullTexture:false,
    logoDecal:"./threejs.png",
    fullDecal:"./threejs.png",
})

export default state