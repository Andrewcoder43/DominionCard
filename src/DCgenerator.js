import React, { useState, useEffect, useRef, useCallback } from 'react';
import './styles.css';
import ImageControls from './ImageControls';
import html2canvas from 'html2canvas';

const colorMap = {
    'Act/Event': '#FFA500', 'Treasure': '#FFD700', 'Victory': '#90EE90',
    'Reaction': '#87CEFA', 'Duration': '#FFA07A', 'Reserve': '#DDA0DD',
    'Shelter': '#F0E68C', 'Curse': '#800080', 'Ruins': '#A52A2A',
    'Landmark': '#20B2AA', 'Night': '#191970', 'Boon': '#98FB98',
    'Hex': '#FF69B4', 'State': '#CD853F', 'Artifact': '#B8860B',
    'Project': '#4682B4', 'Way': '#D2691E', 'Ally': '#7B68EE',
    'Trait': '#556B2F'
};

const TitleInput = () => {
    const [illustrationUrl, setIllustrationUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [primaryColor, setPrimaryColor] = useState('');
    const [imageStyle, setImageStyle] = useState({});
    const [cardBackgroundColor, setCardBackgroundColor] = useState('white');


    const canvasRef = useRef(null);
    const cardTemplateRef = useRef(null);

    const primaryColorOptions = [
        'Act/Event', 'Treasure', 'Victory', 'Reaction', 'Duration', 'Reserve',
        'Shelter', 'Curse', 'Ruins', 'Landmark', 'Night', 'Boon', 'Hex',
        'State', 'Artifact', 'Project', 'Way', 'Ally', 'Trait'
    ];

    const generateCard = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas || !cardTemplateRef.current) return;

        const ctx = canvas.getContext('2d');
        canvas.width = cardTemplateRef.current.width;
        canvas.height = cardTemplateRef.current.height;

        // Draw the base card image
        ctx.drawImage(cardTemplateRef.current, 0, 0);

        // Apply primary color as background
        ctx.fillStyle = cardBackgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw illustration
        if (illustrationUrl) {
            const uploadedImage = new Image();
            uploadedImage.src = illustrationUrl;
            uploadedImage.onload = () => {
                const whiteAreaWidth = canvas.width * 0.8;
                const whiteAreaHeight = canvas.height * 0.5;
                const whiteAreaX = canvas.width * 0.1;
                const whiteAreaY = canvas.height * 0.15;
                ctx.drawImage(uploadedImage, whiteAreaX, whiteAreaY, whiteAreaWidth, whiteAreaHeight);
                drawTextAndFinalize(ctx, canvas);
            };
        } else {
            drawTextAndFinalize(ctx, canvas);
        }
    }, [illustrationUrl, cardBackgroundColor, title, description, type, price]);

    useEffect(() => {
        if (primaryColor) {
            setCardBackgroundColor(colorMap[primaryColor] || 'white');
        } else {
            setCardBackgroundColor('white');
        }
        generateCard();
    }, [primaryColor, generateCard]);




    const drawTextAndFinalize = (ctx, canvas) => {
        // Draw title
        ctx.font = 'bold 20px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText(title, canvas.width / 2, 40);

        // Draw type
        ctx.font = '16px Arial';
        ctx.fillText(type, canvas.width / 2, canvas.height - 60);

        // Draw description
        ctx.font = '14px Arial';
        const lines = description.split('\n');
        lines.forEach((line, index) => {
            ctx.fillText(line, canvas.width / 2, canvas.height - 120 + (index * 20));
        });

        // Draw price
        if (price) {
            const coinImage = new Image();
            coinImage.src = `${process.env.PUBLIC_URL}/Cardimages/Coin.png`;
            coinImage.onload = () => {
                ctx.drawImage(coinImage, 10, canvas.height - 40, 30, 30);
                ctx.font = 'bold 16px Arial';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.fillText(price, 25, canvas.height - 20);
            };
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setIllustrationUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdateImage = ({ x, y, scale }) => {
        setImageStyle({
            transform: `translate(${x}px, ${y}px) scale(${scale})`,
        });
    };

    const composeAndDownloadCard = () => {
        const cardContainer = document.querySelector('.card-image-container');
        if (!cardContainer) return;

        html2canvas(cardContainer).then(canvas => {
            const link = document.createElement('a');
            link.download = 'CustomCard.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    };


    return (
        <main className="dcgenerator-container">
            <div className="input-section">
                <h3 className="title">Title</h3>
                <input
                    type="text"
                    placeholder="village"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-input"
                />

                <h3 className="description-title">Description</h3>
                <textarea
                    placeholder="+1 card&#10;+1 action"
                    className="description-input"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <h3 className="type-title">Type</h3>
                <input
                    type="text"
                    className="type-input"
                    placeholder="Action"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />

                <h3 className="price-title">Price</h3>
                <input
                    type="number"
                    className="price-input"
                    placeholder="2"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <h3 className="primary-color-title">Primary Color</h3>
                <select
                    className="primary-color-input"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                >
                    <option value="">Select a primary color</option>
                    {primaryColorOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

                <h3 className="illustration-title">URL of Illustration</h3>
                <div className="illustration-input-container">
                    <input
                        type="text"
                        value={illustrationUrl}
                        onChange={(e) => setIllustrationUrl(e.target.value)}
                        placeholder="http://example.com/image.jpg"
                        className="illustration-input"
                    />
                    <label htmlFor="image-upload" className="camera-icon">
                        📷
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{ display: 'none' }}
                        />
                    </label>
                </div>

                <ImageControls onUpdateImage={handleUpdateImage} />

                <button className="download-button" onClick={composeAndDownloadCard}>
                    <span className="download-icon">⬇️</span> Download Card
                </button>
            </div>
            <div className="preview-section">
                <div
                    className="card-image-container"
                    style={{ backgroundColor: cardBackgroundColor }}
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/Cardimages/Portrait.png`}
                        alt="Card"
                        className="card-image"
                        style={{ mixBlendMode: 'multiply' }}
                    />
                    {illustrationUrl && (
                        <div className="uploaded-image-container">
                            <img
                                src={illustrationUrl}
                                alt="Uploaded Illustration"
                                className="uploaded-image"
                                style={imageStyle}
                            />
                        </div>
                    )}
                    <div className="card-title-overlay">{title}</div>
                    <div className="card-description-overlay">
                        {description.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < description.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="card-type-overlay">{type}</div>
                    {price && (
                        <div className="card-price-overlay">
                            <img src={`${process.env.PUBLIC_URL}/Cardimages/coin.png`} alt="Coin" className="coin-image" />
                            <span className="price-text">{price}</span>
                        </div>
                    )}
                    {primaryColor && (
                        <div className="card-primary-color-overlay">{primaryColor}</div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default TitleInput;