import React from "react";
import PlanItem from "../components/PlanItem.jsx";
import planData from "../data/planItem.json";

const MainPage = () => {
  const plans = planData[0]?.plans || [];

  return (
    <div className="layout">
      {/* 여기에 여러 컴포넌트 넣어주시거나 페이지 나누시고 싶으시면
      따로 나누셔서 작성하시면 스타일 그대로 ui에 반영하겠습니다! */}
      {plans.length > 0 ? (
        plans.map((plan) => <PlanItem key={plan.planId} plan={plan} />)
      ) : (
        <p>플랜이 없습니다.</p>
      )}
    </div>
  );
};

export default MainPage;
