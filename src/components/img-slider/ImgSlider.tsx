"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./img-slider.css";

const images = [
  "/img/house1/house1-1.jpg",
  "/img/house1/house1-2.jpg",
  "/img/house1/house1-3.jpg",
  "/img/house1/house1-4.jpg",
  "/img/house1/house1-5.jpg",
  "/img/house1/house1-6.jpg",
];

interface ImgSliderProps {
  houseId: number;
}

export const ImgSlider: React.FC<ImgSliderProps> = ({ houseId = 1 }) => {
  // 声明图片数组
  let images: string[] = [];

  // 根据 houseId 动态加载图片
  if (houseId === 2) {
    images = [
      "/img/house3/house2-1.jpg",
      "/img/house3/house2-2.jpg",
      "/img/house3/house2-3.jpg",
      "/img/house3/house2-4.jpg",
      "/img/house3/house2-5.jpg",
      "/img/house3/house2-6.jpg",
      "/img/house3/house2-7.jpg",
      "/img/house3/house2-8.jpg",
      "/img/house3/house2-9.jpg",
      "/img/house3/house2-10.jpg",
      "/img/house3/house2-11.jpg",
      "/img/house3/house2-12.jpg",
    ];
  } else {
    images = [
      "/img/house1/house1-1.jpg",
      "/img/house1/house1-2.jpg",
      "/img/house1/house1-3.jpg",
      "/img/house1/house1-4.jpg",
      "/img/house1/house1-5.jpg",
      "/img/house1/house1-6.jpg",
    ];
  }
  const [[page, direction], setPage] = useState([0, 0]);
  const maxPage = images.length - 1;
  const paginate = (newDirection: number) => {
    let newPage = page + newDirection;

    // 边界检查，实现循环滚动
    if (newPage > maxPage) {
      newPage = 0;
    } else if (newPage < 0) {
      newPage = maxPage;
    }

    setPage([newPage, newDirection]);
  };

  // 计算左边和右边的图片索引
  const prevIndex = page === 0 ? maxPage : page - 1;
  const nextIndex = page === maxPage ? 0 : page + 1;

  const displayedImages = [
    { id: "prev", src: images[prevIndex], className: "prev-img" },
    { id: "current", src: images[page], className: "current-img" },
    { id: "next", src: images[nextIndex], className: "next-img" },
  ];

  return (
    <div id="slider-container">
      <AnimatePresence>
        {displayedImages.map(({ id, src, className }) => (
          <div key={id} className={`overlay-container ${className}`}>
            <motion.img
              src={src}
              className="img "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
            {/* 灰色覆盖层 */}
            {id !== "current" && <div className="gray-overlay"></div>}
          </div>
        ))}
      </AnimatePresence>

      {/* 控制按钮 */}
      <div className="next border-2 border-gray-600" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev border-2 border-gray-600" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </div>
  );
};
