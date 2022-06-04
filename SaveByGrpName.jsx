//SaveByGrpName V1.0
//2021.04.15 Created by JuitingFan
//2021.04.15 Last edited by JuitingFan
//安裝路徑: .\Adobe\Adobe Photoshop CS6 (64 Bit)\Presets\Scripts
//使用說明: 
//  1) 將需要顯示的內容放到同一個圖層群組內
//  2) 圖層群組命名=檔名
//  3) 關閉所有不須顯示的圖層，並將所有展開的圖層群組收至最小
//  4) 點選要存的圖層群組(只能單選)並執行SaveByGrpName.jsx
//  5) 檔案會自動存到psd檔所在路徑


var doc= app.activeDocument;
var orgLayerSet = doc.activeLayer;
var titleName=orgLayerSet.name;


//存檔，使用圖層名稱作為檔名
//來源: https://community.adobe.com/t5/photoshop-ecosystem-discussions/looking-for-a-save-as-targa-script/m-p/9511003
function main(){
    if(!documents.length) return;

    var Name = app.activeDocument.name.replace(/\.[^\.]+$/, '');
    Name = Name.replace(/\d+$/,'');
    Name = Name.replace(/_$/,'');

    try{
    var savePath = activeDocument.path;
    }catch(e){
        alert("請先儲存此psd檔");
        }

    var saveFile = File(savePath + "/" + titleName + ".png");
    savePNG(saveFile);
}

 
function savePNG(saveFile){
    PNGSaveOptions = new PNGSaveOptions();
    activeDocument.saveAs(File(saveFile), PNGSaveOptions, true, Extension.LOWERCASE);
};


//執行
//存檔
main();


//官方Photoshop CS6 JavaScript Reference
//https://www.adobe.com/content/dam/acom/en/devnet/photoshop/scripting/Photoshop-CS6-JavaScript-Ref.pdf

//圖層序列教學
//https://community.adobe.com/t5/photoshop-ecosystem-discussions/accessing-all-the-layers-in-all-the-layer-sets/td-p/10392739