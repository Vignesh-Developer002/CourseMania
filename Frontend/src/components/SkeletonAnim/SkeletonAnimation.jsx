import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonAnimation = ({ count }) => {
  return Array(count)
    .fill(0)
    .map((_, i) => {
      return (
        <div
          style={{
            marginTop: "60px",
            marginLeft: "180px",
            backgroundColor: "#f6f6f6",
            borderRadius: "8px",
          }}
          key={i}
        >
          {/* image */}
          <div
            className="skeleton-top"
            style={{ borderRadius: "8px", width: "285px", height: "170px" }}
          >
            <Skeleton width={285} height={170} />
          </div>
          {/* flex */}
          <div
            style={{
              display: "flex",
              alignItems: "start",
              padding: "5px",
              gap: "30px",
            }}
          >
            <div style={{ width: "200px" }}>
              <Skeleton
                width={200}
                style={{
                  marginBottom: "2px",
                  marginTop: "8px",
                  padding: "5px",
                }}
              />
              <Skeleton
                width={180}
                style={{
                  marginBottom: "2px",
                  marginTop: "8px",
                  padding: "5px",
                }}
              />
              <Skeleton
                width={200}
                style={{
                  marginBottom: "2px",
                  marginTop: "8px",
                  padding: "5px",
                }}
              />
              <Skeleton
                width={200}
                style={{
                  marginBottom: "2px",
                  marginTop: "8px",
                  padding: "5px",
                }}
              />
              <Skeleton
                width={235}
                style={{
                  marginBottom: "2px",
                  marginTop: "8px",
                  padding: "5px",
                }}
              />
            </div>
            {/* add-icon */}
            <div style={{ height: "50px", marginTop: "10px" }}>
              <Skeleton width={35} height={35} borderRadius={50} />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Skeleton
              width={100}
              style={{
                padding: "10px 50px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
          </div>
        </div>
      );
    });
};

export default SkeletonAnimation;
