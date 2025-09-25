// import { useEffect, useState } from "react";

// interface UserData {
//   id: number;
//   first_name: string;
//   last_name: string;
//   username: string;
//   language_code: string;
//   is_premium: boolean;
// }

// export const useTelegramWebApp = () => {
//   const [webApp, setWebApp] = useState<any>(null);
//   const [userData, setUserData] = useState<UserData | null>(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     setIsLoaded(true);

//     if (typeof window !== "undefined" && (window as any).Telegram?.WebApp) {
//       const tg = (window as any).Telegram.WebApp;
//       tg.ready();
//       tg.expand();

//       setWebApp(tg);
//       setUserData(tg.initDataUnsafe?.user || null);
//     }
//   }, []);

//   return { webApp, userData, isLoaded };
// };
