import React from "react";
import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section
    className={`${styles.flexCenter} flex-col flex-wrap md:flex-row sm:mb-20 mb-6`}
  >
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
        >
          <img
            src={client.logo}
            alt="client_logo"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
