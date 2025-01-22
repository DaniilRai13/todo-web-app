const resizeAndConvertImage = (
  imageFile: File,
  maxSize: number,
  setImageUrl: (url: string) => void,
  onImageChange: (base64: string | null) => void
) => {
  const img = new Image();
  const reader = new FileReader();

  reader.onloadend = () => {
    img.src = reader.result as string;
  };

  reader.readAsDataURL(imageFile);

  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const MAX_WIDTH = 800;
      const MAX_HEIGHT = 800;
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);

      const base64Image = canvas.toDataURL('image/jpeg', 0.8);

      const imageSize = getBase64Size(base64Image);
      if (imageSize <= maxSize) {
        setImageUrl(base64Image);
        onImageChange(base64Image);
      } else {
        alert('Изображение слишком большое! Попробуйте выбрать другое.');
      }
    }
  };
};

const getBase64Size = (base64: string) => {
  const base64Str = base64.split(',')[1];
  return (base64Str.length * 3) / 4;
};

export default resizeAndConvertImage
