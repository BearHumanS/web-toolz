function addWatermark() {
    const inputImage = document.getElementById('inputImage');
    const watermarkText = document.getElementById('watermarkText').value;
    const watermarkColor = document.getElementById('watermarkColor').value;
    const watermarkSize = document.getElementById('watermarkSize').value;
    const watermarkX = document.getElementById('watermarkX').value;
    const watermarkY = document.getElementById('watermarkY').value;
    const preview = document.getElementById('preview');
    const downloadLink = document.getElementById('downloadLink');

    // 이미지 파일을 불러옴
    const fileReader = new FileReader();
    fileReader.readAsDataURL(inputImage.files[0]);
    fileReader.onload = function(event) {
      const image = new Image();
      image.src = event.target.result;
      image.onload = function() {
        // 캔버스에 이미지를 그림
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        // 워터마크를 추가
        ctx.font = `${watermarkSize}px Arial`;
        ctx.fillStyle = watermarkColor;
        ctx.fillText(watermarkText, watermarkX, watermarkY);
        // 미리보기와 다운로드 링크를 업데이트
        preview.innerHTML = '';
        preview.appendChild(canvas);
        downloadLink.href = canvas.toDataURL('image/png');
      }
    };
  }