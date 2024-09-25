import Image from "next/image";
import styles from "../styles/Image.module.css";

export default function ImageComp() {
  return (
    <Image
      src="/keyboard.jpg" // Directly reference the image in the public folder
      alt="Logo"
      className={styles.image}
      width={500}
      height={300}
    />
  );
}
