# 校舍安全資料視覺化
## Intoduction
臺灣特殊的地理位置使地震頻繁，是以即時掌握並統整校舍受損資訊有其必要，然而傳統資料蒐集程序繁瑣又費時，資料蒐集方式勢必得有所變革。所幸科技的革新，使資料蒐集的方法能兼具操作性與機動性，滿足校舍安全檢核之即時性與整合性需求。而本視覺化網站旨在提供一直覺的整合介面，統整校舍安全問卷的填答結果，使相關人員能即時得知必要資訊，做出適當的決斷。

## Manual
* [校舍安全資料視覺化](https://bourbon0212.github.io/Diana-Visualization/index.html)
* 操作介面介紹
  * 操作介面最上方為事件選擇，使用者能選擇欲查看之事件
  * 左側為地圖元件，使用者可戳選欲深入了解的縣市
  * 右側表單則會根據使用者前述戳選的內容，顯示相對應的填報結果
* 左側地圖詳述
  * 使用者操作互動之地圖
  * 與右側表單連動
  
* 右側表單詳述
  * 欄位包含：學校、負責人、電話、填答與否、安全評分、詳細填答情形
  * 若負責人已填答，則會出現【View】按鈕，顯示該負責人每題問卷的填報內容
  
* **使用者欲進行任何搜尋前，請關閉瀏覽器 CORS 保護，否則無法向伺服器送出任何請求，使畫面無任何回應**
  * 受限於 Github 網站與伺服器網域不同

## Libraries
* 介面排版與美化
  * Bootstrap V4.1.3   
  * Material Design Lite V1.3.0
* 地圖渲染與操作
  * Openlayers V4.6.5

## Code
### index.js
* var `view` : 地圖設定資訊，包含地圖中心位置與縮放尺度    
* var `raster` : Google Maps提供的地圖圖層    
* var `vector` : 台灣縣市 `GeoJSON` 格式圖層
* var `pointLayer` : 校園點位資料的圖層
* var `popup` : 校園詳細資料的重疊視窗
* var `map` : 疊加前述圖層，渲染成畫面左側之地圖
* function `show`: 顯示校園負責人問卷填報之詳細情形，包含 `loadDetail`
* function `event` : 將資料庫中所有事件名稱置入事件選單

### draw.js
* function `draw` : 依校舍安全嚴重性，將畫面右側表單上色

### loadJSON.js
* function `sort` : 將畫面右側表單依照校舍安全分數、填答狀況排序
* function `loadJSON` : 將伺服器回傳之填報情形 `JSON` 排序後，依序填入畫面右側表單相應欄位

### map_function.js
* var `displayFeatureInfo` : 將地圖移至使用者戳選之縣市，並 `poke` 該縣市之問卷填報結果
* function `plot` : 將戳選的縣市之學校點座標新增於 `pointLayer` 圖層
* function `popupFunc` : 將校園負責人之資訊置入 `popup` 重疊視窗
* function `selectedrow` : 將地圖畫面移至使用者於右側表單點選之學校，並於地圖上顯示相應的 `popup` 重疊視窗

### detail.js
* function `detail` : 將使用者於右側表單戳選之學校的詳細問卷填報資料載入

### request.js
* function `loadEvent` : 向伺服器送出欲載入 `event` 的請求
* function `poke` : 向伺服器送出欲載入使用者戳選縣市的填報結果，包含：`loadJSON` 與 `plot`
* function `loadDetail` : 向伺服器送出欲載入 `detail` 的請求
