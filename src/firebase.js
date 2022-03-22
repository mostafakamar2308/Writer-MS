// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getStorage,
  ref,
  uploadBytes,
  listAll,
  list,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_KjFaDo6wF8ibJJPppBfvgeRXezK3bXk",
  authDomain: "menna-sameh.firebaseapp.com",
  projectId: "menna-sameh",
  storageBucket: "menna-sameh.appspot.com",
  messagingSenderId: "179216312683",
  appId: "1:179216312683:web:04f120cea2135624b9c42e",
  measurementId: "G-5ZYEQCZ17P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const displayedImagesFolder = ref(storage, "For Display");
const receivedImagesFolder = ref(storage, "received");
const metaData = {
  contentType: "image/jpeg",
};

export function uploadImages(file, fileName) {
  let reff = ref(storage, `/received/${fileName}`);
  uploadBytes(reff, file, metaData).then((snapshot) => {
    console.log(snapshot.metadata.size);
    console.log(snapshot.metadata.fullPath);
    console.log("upload Successful");
  });
}

export function getAllImages() {
  let reff = ref(storage, "For Display");
  listAll(reff).then((response) => {
    console.log(response);
    response.items.forEach((itemRef) => {
      getDownloadURL(ref(storage, itemRef.fullPath)).then((url) => {
        console.log(url);
        makeDrawings(url, itemRef.name.replace(".png", ""));
      });
    });
  });
}

function makeDrawings(url, imgName) {
  let container = document.createElement("div");
  container.className = "pic";
  let imgContainer = document.createElement("div");
  imgContainer.className = "pic-img";
  container.appendChild(imgContainer);
  let img = document.createElement("img");
  img.src = url;
  imgContainer.appendChild(img);
  let h1 = document.createElement("h1");
  h1.textContent = imgName;
  container.appendChild(h1);
  document.querySelector(".drawings").appendChild(container);
}
