import React, { useState, useCallback } from "react";
import {
  IonAlert,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonPage,
  IonRow,
  IonSlide,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Login.css";
import { enterSharp, personAddSharp } from "ionicons/icons";
import { auth } from "../";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertText, setAlertText] = useState("");

  const onEmailChange = useCallback((e) => setEmail(e.detail?.value), []);
  const onPasswordChange = useCallback((e) => setPassword(e.detail?.value), []);
  const onLoginClick = useCallback(() => {
    if (email.length === 0) setAlertText("กรุณาใส่อีเมล์ !");
    else if (password.length === 0) setAlertText("กรุณาใส่รหัสผ่าน !");
    else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {})
        .catch((err) => setAlertText(err.message));
    }
  }, [email, password]);

  const onDidDismiss = useCallback(() => setAlertText(""), []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>เข้าสู่ระบบ</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonRow>
          <img src="./images/logo.png" />
        </IonRow>
        <IonSlide>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonSlide>
                    <IonInput
                      placeholder="Email"
                      type="text"
                      onIonChange={onEmailChange}
                      value={email}
                    ></IonInput>
                  </IonSlide>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonSlide>
                    <IonInput
                      placeholder="Password"
                      type="password"
                      onIonChange={onPasswordChange}
                      value={password}
                    ></IonInput>
                  </IonSlide>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol></IonCol>
              <IonCol>
                <IonButton
                  onClick={onLoginClick}
                  expand="block"
                  fill="solid"
                  color="tertiary"
                >
                  <IonIcon slot="start" icon={enterSharp} />
                  Login
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  // href="/Signup"
                  routerLink="/Signup"
                  expand="block"
                  fill="solid"
                  color="tertiary"
                >
                  <IonIcon slot="start" icon={personAddSharp} />
                  Signup
                </IonButton>
              </IonCol>
              <IonCol></IonCol>
              <IonAlert
                isOpen={alertText.length > 0}
                onDidDismiss={onDidDismiss}
                message={alertText}
                buttons={["OK"]}
              />
            </IonRow>
          </IonGrid>
        </IonSlide>
      </IonContent>
    </IonPage>
  );
};

export default Login;
