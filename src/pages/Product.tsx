import React from "react";
import {
  IonBadge,
  IonItem,
  IonLabel,
  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Product.css";

const Product: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>รายได้</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonLabel>อ.คลองหลวง จ.ปทุมธานี	ไถ่ถอน</IonLabel>
          <IonBadge slot="end">300</IonBadge>
        </IonItem>
        <IonItem>
          <IonLabel>อ.บ่อพลอย จ.กาญจนบุรี	ไถ่ถอน</IonLabel>
          <IonBadge slot="end">700</IonBadge>
        </IonItem>
        <IonItem>
          <IonLabel>อ.ปากเกร็ด จ.นนทบุรี	ไถ่ถอน</IonLabel>
          <IonBadge slot="end">300</IonBadge>
        </IonItem>
        <IonItem>
          <IonLabel>อ.เมือง จ.ประจวบคีรีขันธ์	จดจำนอง</IonLabel>
          <IonBadge slot="end">900</IonBadge>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
export default Product;
