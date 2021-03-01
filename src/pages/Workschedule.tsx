import React, { useState } from "react";
import { IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { IonContent, IonSearchbar, IonFooter } from "@ionic/react";
import "./Workschedule.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";


const Workschedule: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ตารางงาน</IonTitle>
        </IonToolbar>
        <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </IonHeader>

      <IonContent>
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
          animated
        >
          {/* <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" /> */}
        </IonSearchbar>
        {/* <IonRow>
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </IonRow> */}
        
      </IonContent>

      <IonFooter>
        <IonToolbar>Search Text: {searchText ?? "(none)"}</IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Workschedule;
