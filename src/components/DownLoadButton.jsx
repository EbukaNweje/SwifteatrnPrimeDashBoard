import React, { useState, useEffect } from 'react';

const InstallPWAButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault(); // Prevent default prompt
      setDeferredPrompt(event);
      setIsVisible(true); // Show the install button
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); // Show install prompt

    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User installed the PWA');
    } else {
      console.log('User dismissed the PWA install prompt');
    }

    setDeferredPrompt(null);
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <button onClick={handleInstallClick} style={styles.button}>
          📲 Install App
        </button>
      )}
    </>
  );
};

// Simple styling for the button
const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default InstallPWAButton;
