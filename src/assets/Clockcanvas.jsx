import React, { useEffect, useRef } from "react";

const ClockCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius *= 0.9;

    const drawClock = () => {
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius);
    };

    const drawFace = (ctx, radius) => {
      let grad;
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.fillStyle = "white";
      ctx.fill();
      grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
      grad.addColorStop(0, "#333");
      grad.addColorStop(0.5, "white");
      grad.addColorStop(1, "#333");

      ctx.strokeStyle = grad;
      ctx.lineWidth = radius * 0.1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
      ctx.fillStyle = "#333";
      ctx.fill();
    };

    const drawNumbers = (ctx, radius) => {
      let ang;
      ctx.font = radius * 0.15 + "px Arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for (let num = 1; num < 13; num++) {
        ang = (num * Math.PI) / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
      }
    };

    const drawTime = (ctx, radius) => {
      const now = new Date();
      let hour = now.getHours();
      let minute = now.getMinutes();
      let second = now.getSeconds();

      // Set fixed hour and minute for the example
      const hour1 = (4 * Math.PI) / 6; // Example hour
      const min1 = (5 * Math.PI) / 30; // Example minute
      drawHand1(ctx, hour1, radius * 0.5, radius * 0.03);
      drawHand1(ctx, min1, radius * 0.8, radius * 0.03);

      hour %= 12;
      hour =
        (hour * Math.PI) / 6 +
        (minute * Math.PI) / (6 * 60) +
        (second * Math.PI) / (360 * 60);
      drawHand(ctx, hour, radius * 0.5, radius * 0.07);

      minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
      drawHand(ctx, minute, radius * 0.8, radius * 0.07);

      second = (second * Math.PI) / 30;
      drawHand(ctx, second, radius * 0.9, radius * 0.02);
    };

    const drawHand = (ctx, pos, length, width) => {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0, 0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.strokeStyle = "#000000";
      ctx.stroke();
      ctx.rotate(-pos);
    };

    const drawHand1 = (ctx, pos, length, width) => {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0, 0);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.strokeStyle = "#FF0000";
      ctx.stroke();
      ctx.rotate(-pos);
    };

    const intervalId = setInterval(drawClock, 1000);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      width={100} // Set your desired width
      height={100} // Set your desired height
    />
  );
};

export default ClockCanvas;
