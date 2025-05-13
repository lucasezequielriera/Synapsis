import React, { useEffect, useRef } from 'react';

const NeuronEffect = ({ color = 'rgba(134, 25, 143, 0.5)', density = 50 }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const neurons = [];
    const connections = [];
    const maxDistance = 150;
    
    // Ajustar el canvas al tamaño de la ventana
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Clase para representar una neurona
    class Neuron {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.active = Math.random() > 0.5;
        this.activeTime = 0;
        this.activationDuration = Math.random() * 100 + 50;
      }
      
      update() {
        // Movimiento de las neuronas
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Rebote en los bordes
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        
        // Activación aleatoria
        if (Math.random() < 0.002) {
          this.active = true;
          this.activeTime = 0;
        }
        
        // Gestionar el tiempo de activación
        if (this.active) {
          this.activeTime++;
          if (this.activeTime > this.activationDuration) {
            this.active = false;
          }
        }
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        if (this.active) {
          // Neurona activa
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.shadowBlur = 10;
          ctx.shadowColor = color;
        } else {
          // Neurona inactiva
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.shadowBlur = 0;
        }
        
        ctx.fill();
        ctx.closePath();
      }
    }
    
    // Inicializar las neuronas
    const initNeurons = () => {
      neurons.length = 0;
      connections.length = 0;
      
      for (let i = 0; i < density; i++) {
        neurons.push(new Neuron());
      }
    };
    
    // Dibujar las conexiones entre neuronas cercanas
    const drawConnections = () => {
      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            ctx.lineTo(neurons[j].x, neurons[j].y);
            
            // Si alguna de las neuronas está activa, la conexión brilla
            if (neurons[i].active || neurons[j].active) {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
              ctx.lineWidth = 1;
              ctx.shadowBlur = 5;
              ctx.shadowColor = color;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
              ctx.lineWidth = 0.5;
              ctx.shadowBlur = 0;
            }
            
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };
    
    // Función de animación principal
    const animate = () => {
      // Limpiar el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Actualizar y dibujar las neuronas
      for (const neuron of neurons) {
        neuron.update();
        neuron.draw();
      }
      
      // Dibujar las conexiones
      drawConnections();
      
      // Continuar la animación
      requestAnimationFrame(animate);
    };
    
    // Inicializar el canvas y las neuronas
    resizeCanvas();
    initNeurons();
    animate();
    
    // Manejar el cambio de tamaño de la ventana
    window.addEventListener('resize', () => {
      resizeCanvas();
      initNeurons();
    });
    
    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [color, density]);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default NeuronEffect; 