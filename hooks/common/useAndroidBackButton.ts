import { useRouter } from "next/navigation";
import {useEffect} from "react"
const useAndroidBackButton = (disableBackButton:boolean) => {
    const router = useRouter();
  
    useEffect(() => {
      const handleBackButton = (event:any) => {
        if (disableBackButton) {
          event.preventDefault();
        } else {
          router.back();
        }
      };
  
      window.addEventListener("popstate", handleBackButton);
  
      return () => {
        window.removeEventListener("popstate", handleBackButton);
      };
    }, [disableBackButton, router]);
  };
  

  export default useAndroidBackButton