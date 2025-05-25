import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  icon: {
    marginRight: "10px",
  },
  body: {
    fontFamily: '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif',
    lineHeight: '1.5',
    color: '#333',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9'
  },
  chat_output: {
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  pre: {
    backgroundColor: '#f6f8fa',
    borderRadius: '6px',
    padding: '12px',
    overflow: 'auto'
  },
  pre_code: {
    display: 'block',
    padding: '12px',
    overflowX: 'auto',
    fontFamily: '\'SFMono-Regular\', Consolas, \'Liberation Mono\', Menlo, Courier, monospace',
    fontSize: '13px',
    lineHeight: '1.4'
  },
  code_buttons: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '4px 8px',
    backgroundColor: '#f0f0f0',
    borderTop: '1px solid #ddd'
  },
  code_button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '4px 8px',
    marginLeft: '6px',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center'
  },
  code_button_hover: {
    backgroundColor: '#45a049'
  },
  code_button_svg: {
    marginRight: '4px',
    width: '14px',
    height: '14px'
  },
  edit_button: {
    backgroundColor: '#FF9800'
  },
  edit_button_hover: {
    backgroundColor: '#F57C00'
  },
  execute_button: {
    backgroundColor: '#2196F3'
  },
  execute_button_hover: {
    backgroundColor: '#0b7dda'
  },
  code_editor: {
    width: '100%',
    minHeight: '100px',
    fontFamily: '\'SFMono-Regular\', Consolas, \'Liberation Mono\', Menlo, Courier, monospace',
    fontSize: '13px',
    lineHeight: '1.4',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    resize: 'vertical'
  },
  editor_buttons: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: '8px',
    marginBottom: '20px'
  },
  p: {
    margin: '0.5em 0'
  },
  message_header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  },
  avatar_ai: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#4a6fa5',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginRight: '10px',
    fontSize: '12px'
  },
  sender_name: {
    fontWeight: '500',
    marginRight: '10px'
  },
  timestamp: {
    color: '#888',
    fontSize: '12px'
  },
  message_content: {
    animation: 'fadeIn 0.3s ease-in-out'
  },
  chat_container: {
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '1px solid #e6e6e6'
  },
  avatar_me: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#39b362',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginRight: '10px',
    fontSize: '12px'
  },
  reasoning_container: {
    margin: '0 0 15px 42px',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    maxHeight: '500px',
    border: '1px solid #e0e5eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
  },
  reasoning_container_collapsed: {
    maxHeight: '38px'
  },
  reasoning_header: {
    padding: '8px 12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#edf2f7',
    cursor: 'pointer',
    userSelect: 'none',
    borderBottom: '1px solid #e0e5eb',
    position: 'sticky',
    top: '0',
    zIndex: '10'
  },
  reasoning_title: {
    fontWeight: '500',
    color: '#4a6fa5',
    display: 'flex',
    alignItems: 'center'
  },
  reasoning_title_svg: {
    width: '16px',
    height: '16px',
    marginRight: '6px',
    fill: '#4a6fa5'
  },
  reasoning_toggle_svg: {
    width: '16px',
    height: '16px',
    fill: '#4a6fa5',
    transition: 'transform 0.2s ease'
  },
  collapsed__reasoning_toggle_svg: {
    transform: 'rotate(-90deg)'
  },
  reasoning_content: {
    flexGrow: '1'
  },
  collapsed__reasoning_content: {
    display: 'none'
  },
  code: {
    fontFamily: '\'SFMono-Regular\', Consolas, \'Liberation Mono\', Menlo, monospace',
    fontSize: '0.9em'
  },
  reasoning_container_not__collapsed: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '80vh'
  },
  case_container: {
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
    marginBottom: '30px',
    overflow: 'hidden',
    border: '1px solid #e6e6e6'
  },
  case_header: {
    background: 'linear-gradient(135deg, #4a6fa5 0%, #3d5a7c 100%)',
    padding: '5px 25px',
    color: 'white',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  },
  case_header_h2: {
    margin: '0',
    fontSize: '1.3em',
    fontWeight: '400',
    letterSpacing: '0.5px'
  },
  case_content: {
    padding: '15px'
  },
  case_info: {
    color: '#444',
    lineHeight: '1.3'
  },
  case_info_p: {
    margin: '10px 0',
    fontSize: '0.95em',
    display: 'flex',
    alignItems: 'flex-start'
  },
  case_info_p_before: {
    color: '#4a6fa5',
    fontWeight: 'bold',
    marginRight: '10px',
    marginTop: '2px'
  },
  case_info_a: {
    color: '#4a6fa5',
    textDecoration: 'none',
    fontWeight: '500',
    position: 'relative',
    transition: 'all 0.2s ease',
    padding: '0 2px'
  },
  case_info_a_hover: {
    color: '#3d5a7c',
    textDecoration: 'none'
  },
  case_info_a_after: {
    content: '\'\'',
    position: 'absolute',
    width: '100%',
    height: '1px',
    bottom: '-1px',
    left: '0',
    backgroundColor: '#4a6fa5',
    transform: 'scaleX(0)',
    transformOrigin: 'right',
    transition: 'transform 0.3s ease'
  },
  case_info_a_hover_after: {
    transform: 'scaleX(1)',
    transformOrigin: 'left'
  },
  version: {
    background: '#f0f4f8',
    padding: '1px 6px',
    borderRadius: '4px',
    fontSize: '0.8em',
    color: '#4a6fa5',
    fontWeight: '500'
  }
});

export default useStyles; 