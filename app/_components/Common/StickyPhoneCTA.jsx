'use client';
import { LuPhone } from 'react-icons/lu';
import { sendGTMEvent } from '@next/third-parties/google';

export default function StickyPhoneCTA() {
  const handleCall = () => {
    sendGTMEvent({
      event: 'phone_call_click',
      value: 'sticky_cta',
      type: 'click_to_call',
    });
  };

  return (
    <a
      href="tel:0405133761"
      onClick={handleCall}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 lg:gap-3 lg:py-4 lg:px-6"
      aria-label="Call for emergency repair"
      title="Click to call for emergency repair: 0405 133 761"
    >
      <LuPhone className="text-xl lg:text-2xl" />
      <span className="hidden sm:inline text-sm lg:text-base">CALL NOW</span>
    </a>
  );
}
