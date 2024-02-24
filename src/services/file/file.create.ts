import { storage } from "@/firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { uuid } from 'uuidv4';

const uploadFile = async (file: File): Promise<String> => {
  try {
    const storageRef = ref(storage, uuid());

    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  } catch (error) {
    return Promise.reject();
  }
};

export default uploadFile;
