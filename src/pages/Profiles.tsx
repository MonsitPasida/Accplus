import React, { useContext, useCallback, useState } from "react";
import {
  IonContent,
  IonSlide,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonList,
  IonItem,
  IonText,
  IonRow,
  IonButton,
  IonIcon,
} from "@ionic/react";
import "./Profiles.css";
import { auth, UserContext } from "../";
import { enterSharp, walkOutline } from "ionicons/icons";

const Profiles: React.FC = () => {
  const user = useContext(UserContext);
  const [isSigningOut, setIsSinginOut] = useState(false);

  const onSignoutClick = useCallback(() => {
    setIsSinginOut(true);
    auth.signOut().catch((err) => {
      console.log({ err });
      setIsSinginOut(false);
    });
  }, []);

  return (
    <IonPage>
      
      <IonHeader>
        <IonToolbar>
          <IonTitle>โปรไฟล์</IonTitle>
          <IonButton color="danger" slot="end" disabled={isSigningOut} onClick={onSignoutClick}>
                End{isSigningOut ? "ing" : ""}
                <IonIcon slot="end" icon={walkOutline} />
          </IonButton>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <IonSlide>
          <IonGrid>
            <IonSlide>
              <IonList>
                <IonItem>
                  <IonText>Welcome</IonText>
                </IonItem>
              </IonList>
            </IonSlide>
            <IonSlide>
              <IonList>
                <IonRow>
                  <IonItem>
                  <IonText>{user?.displayName}</IonText>
                    <IonText>{user?.email}</IonText>
                  </IonItem>
                </IonRow>
              </IonList>
            </IonSlide>

            <IonList>
              
            </IonList>
          </IonGrid>
        </IonSlide>
      </IonContent>
    </IonPage>
  );
};
export default Profiles;
