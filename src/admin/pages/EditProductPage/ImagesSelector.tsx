import { Grid } from "@mui/material"
import FileUploadIcon from '@mui/icons-material/FileUpload';

export const ImagesSelector = () => {
  return (
    <Grid container justifyContent={'center'}>
      <Grid item xs={12} md={6.5}>
        <div
          style={{
            display: "flex",
            justifyContent: 'center',
            gap: 10,
            marginBottom: 25,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              border: "1px solid #727D91",
              height: 150,
              flexGrow: 0.25,
              borderRadius: 5,
              position: "relative",
            }}
          >
            <img
              src={"/src/assets/images/profile.png"}
              alt="imagen-negocio"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <button
              style={{
                position: "absolute",
                left: 0,
                top: 5,
                backgroundColor: "transparent",
                border: 0,
                zIndex: 2,
                cursor: "pointer",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C3.54286 0 0 3.54286 0 8C0 12.4571 3.54286 16 8 16C12.4571 16 16 12.4571 16 8C16 3.54286 12.4571 0 8 0ZM8 14.8571C4.22857 14.8571 1.14286 11.7714 1.14286 8C1.14286 4.22857 4.22857 1.14286 8 1.14286C11.7714 1.14286 14.8571 4.22857 14.8571 8C14.8571 11.7714 11.7714 14.8571 8 14.8571Z"
                  fill="#BBBBBB"
                />
                <path
                  d="M11.0857 12L8 8.91429L4.91429 12L4 11.0857L7.08571 8L4 4.91429L4.91429 4L8 7.08571L11.0857 4L12 4.91429L8.91429 8L12 11.0857L11.0857 12Z"
                  fill="#BBBBBB"
                />
              </svg>
            </button>
            <span
              style={{
                width: "60%",
                position: "absolute",
                backgroundColor: "#29A654",
                color: "#ffffff",
                fontWeight: "bold",
                padding: "2px 5px",
                borderRadius: 20,
                bottom: 10,
                textAlign: "center",
                fontSize: 14,
                left: 0,
                right: 0,
                margin: "auto",
              }}
            >
              Portada
            </span>
          </div>

          <div
            style={{
              border: "1px solid #727D91",
              height: 150,
              flexGrow: 0.25,
              borderRadius: 5,
              position: "relative",
            }}
          >
            <img
              src={"/src/assets/images/profile.png"}
              alt="imagen-negocio"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <button
              style={{
                position: "absolute",
                left: 0,
                top: 5,
                backgroundColor: "transparent",
                border: 0,
                zIndex: 2,
                cursor: "pointer",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C3.54286 0 0 3.54286 0 8C0 12.4571 3.54286 16 8 16C12.4571 16 16 12.4571 16 8C16 3.54286 12.4571 0 8 0ZM8 14.8571C4.22857 14.8571 1.14286 11.7714 1.14286 8C1.14286 4.22857 4.22857 1.14286 8 1.14286C11.7714 1.14286 14.8571 4.22857 14.8571 8C14.8571 11.7714 11.7714 14.8571 8 14.8571Z"
                  fill="#BBBBBB"
                />
                <path
                  d="M11.0857 12L8 8.91429L4.91429 12L4 11.0857L7.08571 8L4 4.91429L4.91429 4L8 7.08571L11.0857 4L12 4.91429L8.91429 8L12 11.0857L11.0857 12Z"
                  fill="#BBBBBB"
                />
              </svg>
            </button>
          </div>

          <div
            style={{
              flexShrink: 0,
              height: 150,
              flexGrow: 0.25,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: 5,
              border: "1px dashed #727D91",
            }}
          >
            <p
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                zIndex: 0,
                cursor: "pointer",
              }}
            >
              <FileUploadIcon />
              Seleccionar
            </p>
            <input
              type="file"
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0,
                zIndex: 2,
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </Grid>
    </Grid>
  )
}
