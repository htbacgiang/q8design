// components/MessengerButton.tsx

import { FC } from 'react';
import FbMess from '../../public/fbmess.png';
import Image from "next/image";
import Link from 'next/link';
import Zalo from "../../public/zalo-icon.png";

const MessengerButton: FC = () => {
  const openMessenger = () => {
    window.open('https://m.me/147995528391633', '_blank');
  };

  return (
    <>
      <style jsx>{`
        @keyframes zaloZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes zaloZoomDelay {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .zalo-zoom {
          animation: zaloZoom 2s ease-in-out infinite;
        }
        .zalo-zoom-delay {
          animation: zaloZoomDelay 2s ease-in-out infinite;
          animation-delay: 0.4s;
        }
      `}</style>
      <div className="fixed bottom-8 left-4 md:bottom-6 md:left-6 z-50 space-y-2">

        {/* Zalo Ring Animation - Bỏ bớt 1 vòng ngoài cùng */}
        <div className="relative group">
          {/* Chỉ 1 vòng pulsing ring (bỏ bớt 1 vòng) */}
          <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 border-2 border-blue-400 rounded-full animate-ping opacity-60 pointer-events-none"></div>
          <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 border-2 border-blue-300 rounded-full animate-ping opacity-40 pointer-events-none" style={{animationDelay: '0.4s'}}></div>
          {/* Main button */}
          <Link href="http://zalo.me/0988116828" target="_blank" rel="noopener noreferrer">
            <div className="relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110 cursor-pointer">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 hover:rotate-12">
                  <Image 
                    src={Zalo} 
                    alt="Zalo Icon" 
                    width={32}
                    height={32}
                    className="w-6 h-6 md:w-8 md:h-8 zalo-zoom hover:scale-110 transition-transform duration-200"
                  />
                </div>
              </div>
            </div>
          </Link>
          
          {/* Hover effect overlay */}
          <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
          
          {/* Floating particles effect - ẩn trên mobile */}
          <div className="hidden md:block absolute -top-2 -right-2 w-2 h-2 bg-blue-300 rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
          <div className="hidden md:block absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping opacity-50" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>
    </>
  );
};

export default MessengerButton;
