const images = JSON.parse(localStorage.getItem('favImages'));

export const store = {
  debug: true,
  state: {
    images: images ? images : [],
  },
  addImage(img) {
    const index = this.state.images.indexOf(this.state.images.find(i => i.id === img.id));
    if (index === -1) {
      img.favorite = true;
      this.state.images.push(img);
      localStorage.setItem('favImages', JSON.stringify(this.state.images));
    } else {
      img.favorite = false;
      this.state.images.splice(index, 1);
      localStorage.setItem('favImages', JSON.stringify(this.state.images));
    }
  },
};
