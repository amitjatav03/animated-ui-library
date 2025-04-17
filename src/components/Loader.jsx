import { motion } from "framer-motion";

const Loader = () => {
  return (
    /* From Uiverse.io by devAaus */ 
    <div class="flex-col gap-4 w-full flex items-center justify-center">
        <div
            class="w-36 h-36 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
        >
            <div
            class="w-28 h-28 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
            ></div>
        </div>
    </div>

  );
};

export default Loader;
