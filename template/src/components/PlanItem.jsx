import React from "react";
import "./PlanItem.css";

// 날짜 포맷 함수
const formatDate = (dateString) => {
  if (dateString.length === 8) {
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    return `${year}/${month}/${day}`;
  }
  return dateString;
};

// 가격 포맷 함수 (1000 단위 콤마 추가)
const formatCurrency = (price) => {
  return Number(price).toLocaleString(); // 1000 단위로 , 추가
};

const PlanItem = ({ plan }) => {
  if (!plan) return null; // plan이 없으면 렌더링하지 않음

  return (
    <div className="plan-item">
      {/* 메인 이미지 */}
      <div className="plan-image-container">
        <img
          src={plan.planMainImage}
          alt="플랜 메인 이미지가 없습니다."
          className="plan-main-image"
        />
      </div>

      {/* 여행 정보 */}
      <div className="plan-intro">
        <h3>{plan.planTitle}</h3>
        <p>
          여행 기간: {formatDate(plan.travelStartDate)} ~{" "}
          {formatDate(plan.travelEndDate)}
        </p>
        <p>총 비용: {formatCurrency(plan.totalPrice)}원</p>

        {/* 여행지 목록 */}
        {plan.destinations.length > 0 && (
          <div className="plan-destinations">
            <span>여행지: </span>
            {plan.destinations.map((destination, index) => (
              <span key={destination.destinationTagId}>
                {destination.destinationTag.destinationTagName}
                {index < plan.destinations.length - 1 && ", "}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlanItem;
