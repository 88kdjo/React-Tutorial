import React from 'react';

// class component

class ConfirmButtonClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isConfirmed: false,
    };

    // bind() 사용
    // callback에서 'this'를 사용하기 위해서는 바인딩을 필수적으로 해줘야 합니다.
    // this.handleConfirm = this.handleConfirm.bind(this);
  };

  // handleConfirm() {
  //   this.setState( (prevState) => ({
  //     isConfirmed: !prevState.isConfirmed,
  //   }));
  // };

  // Class fields syntax 사용
  handleConfirm = () => {
    this.setState( (prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  };

  render() {
    return (
      <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
        {
          this.state.isConfirmed ? '확인됨' : '확인하기'
        }
      </button>
    );
  };

}

export default ConfirmButtonClassComponent;