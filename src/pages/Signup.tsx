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
import "./Signup.css";
import { checkmarkSharp, closeSharp } from "ionicons/icons";
import { auth } from "..";


const Signup: React.FC = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confiemPassword, setConfiemPassword] = useState("");
  const [alertText, setAlertText] = useState("");
  //const history = useHistory();

  const ondisplayNameChange = useCallback((e) => setEmail(e.detail?.value), []);
  const onEmailChange = useCallback((e) => setEmail(e.detail?.value), []);
  const onPasswordChange = useCallback((e) => setPassword(e.detail?.value), []);
  const onConfiemPasswordChange = useCallback(
    (e) => setConfiemPassword(e.detail?.value),
    []
  );

  const onSignupClick = useCallback(() => {
    //if (displayName.length === 0) setAlertText("Fullname Required!");
     if (email.length === 0) setAlertText("Email Required!");
    else if (password.length === 0) setAlertText("Password Required!");
    else if (password.length < 6 ) setAlertText("Password Too Short!");
    else if (confiemPassword !== password)
      setAlertText("ConfiemPasswoer Don't Match!");
    else {
      auth.createUserWithEmailAndPassword(email,password).catch(err => setAlertText(err.message))
    }
  }, [displayName,confiemPassword, password, email]);

  const onDidDismiss = useCallback(() => setAlertText(""), []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>สมัคสมาชิก</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonSlide>
          <IonGrid>
          {/* <IonRow>
              <IonCol>
                <IonItem>
                  <IonSlide>
                    <IonInput
                      placeholder="fullname"
                      type="text"
                      onIonChange={ondisplayNameChange}
                      value={displayName}
                    ></IonInput>
                  </IonSlide>
                </IonItem>
              </IonCol>
            </IonRow> */}

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
              <IonCol>
                <IonItem>
                  <IonSlide>
                    <IonInput
                      placeholder="ConfiemPassword"
                      type="password"
                      onIonChange={onConfiemPasswordChange}
                      value={confiemPassword}
                    ></IonInput>
                  </IonSlide>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol></IonCol>
              <IonCol>
                <IonButton
                  onClick={onSignupClick}
                  expand="block"
                  fill="solid"
                  color="tertiary"
                >
                  <IonIcon slot="start" icon={checkmarkSharp} />
                  Register
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton routerLink="./Login" expand="block" fill="solid" color="tertiary">
                  <IonIcon slot="start" icon={closeSharp} />
                  Cancel
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

export default Signup;
