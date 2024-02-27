import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { Game as PhaserGame } from '../../scenes/Game';
import { Preloader } from '../../scenes/Preloader';

export default function GameContainer() {
  const gameRef = useRef();

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 959,
      height: 640,
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: true,
        },
      },
      parent: gameRef.current,
      scene: [Preloader, PhaserGame],
      pixelArt: true,
      roundPixels: true,
    };

    new Phaser.Game(config);
  }, []);

  return (
    <>
      <div ref={gameRef} />
    </>
  );
}
