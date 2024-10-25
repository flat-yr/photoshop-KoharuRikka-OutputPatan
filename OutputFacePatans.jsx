
// 小春六花
var firstLayerSetName = "表情";
var secondLayerSetName = "*表情セット";

// 琴葉茜
// var firstLayerSetName = "茜表情";
// var secondLayerSetName = "*表情セット(影、頬紅、汗はお好みで使って下さい)";

// 琴葉葵
// var firstLayerSetName = "葵表情";
// var secondLayerSetName = "*表情セット(影、頬紅、汗はお好みで使って下さい)";


// 切り替え対象のレイヤーを取得する
var facePatanLayers = app.activeDocument.layerSets[firstLayerSetName].layerSets[secondLayerSetName].layers;

// 意図しない表示を防ぐため、表情セット以下のレイヤーは全てオフにする
for (var i=0; i<facePatanLayers.length; i++) {
    facePatanLayers[i].visible = false;
}

// png保存先を選択させる
selectedFolderName = Folder.selectDialog("保存先のフォルダを選択してください");

for (var i=0; i<facePatanLayers.length; i++) {
    facePatanLayers[i].visible = true;

    // *が含まれていると保存できかったので保存ファイル名では除去する
    var imageName = facePatanLayers[i].name.replace("*", "");

    // png保存
    var options = new ExportOptionsSaveForWeb();
    options.format = SaveDocumentType.PNG;
    options.PNG8 = false;
    options.optimized = false;
    options.quality = 100;
    var file = new File(selectedFolderName + "/" + imageName + ".png");
    app.activeDocument.exportDocument(file, ExportType.SAVEFORWEB, options);

    facePatanLayers[i].visible = false;
}

// 処理終了後がのっぺらぼうなので、1番目の表情をオンにする
facePatanLayers[0].visible = true;

alert("表情セットのpng出力が完了しました");