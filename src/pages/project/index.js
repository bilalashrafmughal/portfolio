import React, { useCallback, useState } from "react";
import Paper from "shared/Paper";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { projectsList } from "shared/data";
import { H1, P1, P4UB } from "theme/Typos";
import ImageViewer from "react-simple-image-viewer";

export default function Project() {
  const { project: projectId } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const origin = window.location.origin;
  const project = projectsList.find((p) => p.project === projectId);
  const images = project.images.map(
    (img) => `${origin}/assets/projects/${project.project}/${img}.PNG`
  );

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <Paper>
      <StyledProject>
        <H1 className="text-center">{project.title}</H1>
        <P1 className="text-center">{project.description}</P1>
        <P1 className="mt-36">
          <span className="font-bold">Tech Stack: </span> {project.tech}{" "}
        </P1>
        <div className="grid grid-cols-2 gap-4 mt-28">
          {images.map((src, index) => (
            <div className="">
              <img
                className="w-full hover:opacity-70 cursor-pointer"
                src={src}
                onClick={() => openImageViewer(index)}
                key={index}
                style={{ margin: "2px" }}
                alt=""
              />
            </div>
          ))}
        </div>
        <div>
          {isViewerOpen && (
            <ImageViewer
              src={images}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
        <div className="">
          {project.preview && (
            <div className="bottom-bar flex items-center py-16">
              <img
                src={`${window.location.origin}/assets/icons/attachment.png`}
                alt="att"
              />
              <a href={project.preview} target="_blank" rel="noreferrer">
                {" "}
                <P4UB>Live Preview</P4UB>
              </a>
            </div>
          )}
        </div>
      </StyledProject>
    </Paper>
  );
}

const StyledProject = styled.div``;
