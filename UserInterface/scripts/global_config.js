/**********************************************
 ********* PRE-DEFINED CONFIGURATIONS *********
 **********************************************/

/***************** SYSTEM CONFIG **************/
var DATA_PATH = "./Data/";
var OPEN_WITH_TABLE = true,
	OPEN_WITH_CHART = true,
	OPEN_WITH_IMAGE = true;

/****************** TABLE VIEW ****************/
var DEFAULT_HIDDEN_COLUMNS = [
	"outdir",
	"comment",
	"type"
];

/****************** CHART VIEW ****************/
// Initialize the bar chart on this attribute.
var DEFAULT_CHART_ATTRIBUTE = "height";

// "bar_chart" | "parallel_coordinate"
var DEFAULT_VIS_TYPE = "parallel_coordinate";

// Initialize the parallel coordinate on these attributes.
var DEFAULT_PARAC_ATTRIBUTES = [
    "levels", 
    "height", 
    "width", 
    "mpp_x", 
    "mpp_y", 
    "Magnification", 
    "pen_markings", 
    "coverslip_edge", 
    "bubble", 
    "nonwhite", 
    "dark", 
    "percent_small_tissue_removed", 
    "percent_small_tissue_filled", 
    "percent_blurry", 
    "spur_pixels", 
    "template1_MSE_hist", 
    "template2_MSE_hist", 
    "template3_MSE_hist", 
    "michelson_contrast", 
    "rms_contrast", 
    "grayscale_brightness", 
    "chan1_brightness", 
    "chan2_brightness", 
    "chan3_brightness", 
    "deconv_c0_mean", 
    "deconv_c1_mean", 
    "deconv_c2_mean", 
    "pixels_to_use"
];

var DEFAULT_UMAP_ATTRIBUTES = [
    "percent_small_tissue_removed", 
    "percent_small_tissue_filled", 
    "template1_MSE_hist", 
    "template2_MSE_hist", 
    "template3_MSE_hist", 
    "michelson_contrast", 
    "rms_contrast", 
    "grayscale_brightness", 
    "chan1_brightness", 
    "chan2_brightness", 
    "chan3_brightness", 
    "deconv_c0_mean", 
    "deconv_c1_mean", 
    "deconv_c2_mean"
];

/****************** IMAGE VIEW ****************/
// full set of possible image format identifiers. 
var DEFAULT_IMAGE_EXTENSIONS = [
    "_thumb.png",
    "_fuse.png",
    "_areathresh.png",
    "_blurry.png",
    "_bubble.png",
    "_coverslip_edge.png",
    "_dark.png",
    "_deconv_c0.png",
    "_deconv_c1.png",
    "_deconv_c2.png",
    "_edge.png",
    "_flat.png",
    "_fatlike.png",    
    "_hist.png",
    "_mask_use.png",
    "_bright.png",
    "_pen_markings.png",
    "_small_fill.png",
    "_small_remove.png",
    "_spur.png"
];
// list of image types that have a corresponding _xxx_small.png version
var SMALL_IMAGE_EXTENSIONS = [
	// "_thumb.png"
];
// Default image type
var DEFAULT_IMAGE_EXTENSION = "_mask_use.png";
