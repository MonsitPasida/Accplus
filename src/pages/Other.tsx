import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonSlide,
} from "@ionic/react";
import "./Other.css";
import { arrowRedoCircleOutline, enterSharp } from "ionicons/icons";

const Other: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>อื่นๆ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <IonSlide>
          <IonGrid>
            <IonRow>
              <IonCol>
              <IonButton href="http://www.ralc.in.th/" fill="clear">
            ติดต่อเรา <IonIcon slot="end" icon={arrowRedoCircleOutline} />
          </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonSlide>
      </IonContent>
    </IonPage>
  );
};

export default Other;
