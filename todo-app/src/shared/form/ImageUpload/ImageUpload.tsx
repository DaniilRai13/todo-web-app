import { useState, useEffect, FC, ChangeEvent, useRef } from 'react';
import styles from './ImageUpload.module.scss'
import resizeAndConvertImage from '../../../common/resizeImg';

interface ImageUploadProps {
  currentImageUrl: string | null;
  onImageChange: (base64: string | null) => void;
  maxSize: number;
}

const ImageUpload: FC<ImageUploadProps> = ({ currentImageUrl, onImageChange, maxSize }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [imageUrl, setImageUrl] = useState<string | null>(currentImageUrl);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (file) {
      resizeAndConvertImage(file, maxSize, setImageUrl, onImageChange);
    }
  }, [file]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFile = e.target.files ? e.target.files[0] : null
    if (newFile) {
      setFile(newFile);
    }
  };

  return (
    <div className={styles.imageContainer}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        onClick={() => inputRef.current?.click()}
      >
      </div>
      <input
        ref={inputRef}
        style={{ display: 'none' }}
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ImageUpload;